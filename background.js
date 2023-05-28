// Listen for extension activation or deactivation
chrome.runtime.onMessage.addListener(function (message) {
    if (message === 'toggle_extension') {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'toggle_extension');
      });
    }
  });
  