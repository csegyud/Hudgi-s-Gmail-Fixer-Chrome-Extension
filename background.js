function LoadHandler() {
    var opt = {
        type: "basic",
        title: "Hudgi's Gmail Fixer",
        message: "Extension loaded successfully.",
        iconUrl: "icon.png"
    };
    var notification = chrome.notifications.create('loaded', opt, callback);
    notification.show();
}

function callback() { }

LoadHandler();
