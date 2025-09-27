chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "loading") {
    chrome.windows.getAll({ populate: true }, (windows) => {
      windows.forEach((tabs) => {
        tabs.tabs?.forEach((tab) => {
          if (tab.url === changeInfo.url && tab.id && tab.id !== tabId) {
            console.log(tab.url);
            void chrome.tabs.remove(tab.id);
          }
        });
      });
    });
  }
});
