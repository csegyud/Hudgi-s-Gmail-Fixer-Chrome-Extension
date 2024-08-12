function LoadHandler() {
    var opt = {
        type: "basic",
        title: "Hudgi's Gmail Fixer",
        message: "Extension loaded successfully.",
        iconUrl: "icon.png"
    };
    var notification = chrome.notifications.create('loaded', opt, callback);
    setTimeout(() => {
        if (notification) {
            notification.show();
        }
    }, 1000);
}

function callback() { }

setTimeout(function () {
    LoadHandler();
}, 5000);
