chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if(request.todo === "showPageAction"){
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.pageAction.show(tabs[0].id);
      });    
    }
  }
);
  
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url) {
      chrome.storage.local.get({ 'shorts-blocking-enabled': true }, function(data) {
        let enabled = data['shorts-blocking-enabled'];
  
        if (enabled && tab.url.startsWith('https://www.youtube.com/shorts/')) {
          chrome.tabs.update(tabId, { url: chrome.runtime.getURL("blocked.html") });
        } else if (enabled && tab.url === chrome.runtime.getURL("blocked.html")) {
          chrome.pageAction.show(tabId);
        }
      });
    }
  });
  