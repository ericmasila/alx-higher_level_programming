document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    if (header) {
        header.style.color = "#FF0000"; // Setting text color to red
    } else {
        console.error("Header element not found.");
    }
});
