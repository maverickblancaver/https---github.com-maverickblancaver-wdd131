// getdates.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    
    // Set last modified date in the footer
    var lastModifiedDate = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate.toLocaleDateString(undefined, options);
});
