var mudar = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  if (!mudar) {
    chrome.tabs.executeScript({
      code: 'var elements = document.getElementsByTagName("*"); for (var i = 0; i < elements.length; i++) { elements[i].style.color = "black"; }'
    });
    mudar = true;
  } else {
    chrome.tabs.reload();
    mudar = false;
  }
});
