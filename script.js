function getCurrentFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `_AD_${day}-${month}-${year}_V1`;
}

function getWeekFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `Week-2: ${day}-${month}-${year}`;
}

function updateTextFields() {
    document.getElementById('text1').value = getCurrentFormattedDate();
    document.getElementById('weekText').value = getWeekFormattedDate();
}

function copyText(elementId) {
    const textElement = document.getElementById(elementId);
    textElement.select();
    textElement.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    textElement.blur();
    alert('Copied to clipboard: ' + textElement.value);
}

// Update text fields with current date when the page loads
updateTextFields();
