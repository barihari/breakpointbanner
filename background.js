let isEnabled = false;

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url.includes('bankrate.com')) {
    return;
  }

  isEnabled = !isEnabled;

  if (isEnabled) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['styles.css']
    });
  } else {
    // Remove the banner by injecting a script to remove it
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const banner = document.querySelector('.treasuryBreakpointBanner');
        if (banner) {
          banner.remove();
        }
      }
    });
    await chrome.scripting.removeCSS({
      target: { tabId: tab.id },
      files: ['styles.css']
    });
  }

  // Update the extension icon to show enabled/disabled state
  chrome.action.setIcon({
    path: isEnabled ? "icon-enabled.png" : "icon-disabled.png",
    tabId: tab.id
  });
}); 