const statusBar = document.getElementById('status-bar');
const chatgptFrame = document.getElementById('chatgpt-frame');

function hideStatus() {
  statusBar.style.display = 'none';
  statusBar.textContent = '';
}

function showStatus(message) {
  statusBar.textContent = message;
  statusBar.style.backgroundColor = '#d93025';
  statusBar.style.display = 'block';
}

if (!statusBar || !chatgptFrame) {
  console.error('Side panel elements are missing.');
} else {
  hideStatus();
  chatgptFrame.addEventListener('load', hideStatus);
  chatgptFrame.addEventListener('error', () => {
    showStatus('ChatGPT could not be loaded. Please reload the side panel.');
  });
}
