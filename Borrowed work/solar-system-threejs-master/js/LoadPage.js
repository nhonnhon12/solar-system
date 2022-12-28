// Execute functions calls in the body section of HTML file (index.html).
function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 3000);
}

// Confirm user's input touch on button.
document.getElementById("loadButton").addEventListener("click", function () {
    setVisible('body', true);
    setVisible('#loading', false);
});

// Event Listener on button to load the modal page.
document.getElementById("loadButton").addEventListener("touchstart", function () {
    setVisible('body', true);
    setVisible('#loading', false);
});

// Set introduction page to invisible.
function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
