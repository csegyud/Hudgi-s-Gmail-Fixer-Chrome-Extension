var iconURL = chrome.runtime.getURL("icon.png");

InboxSDK.load(1, 'sdk_HudgiGmailFix_d32dfdccca').then(function (sdk) {
    // the SDK has been loaded
    sdk.Compose.registerComposeViewHandler(function (composeView) {

        // Add new button to the tool bar in Compose view
        composeView.addButton({
            title: "Remove Zero Width Spaces!",
            iconUrl: iconURL,
            onClick: function (event) {
                var origHtml = event.composeView.getHTMLContent();
                var modifiedHtml = origHtml.replace(/\u200B/g, '');
                event.composeView.setBodyHTML(modifiedHtml);
            },
        });

        // Subscribe to the presending event of the compose view
        composeView.on('presending', function (event) {
            var origHtml = composeView.getHTMLContent();
            var modifiedHtml = origHtml.replace(/\u200B/g, '');
            composeView.setBodyHTML(modifiedHtml);

        });
    });
});
