// Open side panel and auto-extract transcript when extension icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
  // Always open side panel
  chrome.sidePanel.open({ windowId: tab.windowId });

  // If on a YouTube video page, also auto-extract transcript
  if (tab.url && tab.url.includes('youtube.com/watch')) {
    try {
      await chrome.tabs.sendMessage(tab.id, { action: 'extractAndDownload' });
    } catch (error) {
      console.log('Auto-extract error:', error.message);
    }
  }
});
