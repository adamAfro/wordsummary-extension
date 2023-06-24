(() => {
  // bundle/background.js
  var selecting = false;
  browser.browserAction.onClicked.addListener(function(tab) {
    selecting = !selecting;
    browser.tabs.sendMessage(tab.id, {
      command: "select"
    }, (response) => selecting = false);
  });
})();
