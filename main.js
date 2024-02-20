// popup.js
function getCiteNumber(filename) {
  const parts = filename.split('.');
  return parts[0]+"."+parts[1]; // This will give you the base filename without any extensions
}
document.addEventListener("DOMContentLoaded", () => {
  const parseButton = document.querySelector('#parseButton');
  parseButton.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let url = new URL(tab.url);
    if (url.hostname === 'arxiv.org' && url.pathname.startsWith('/abs/')) {
      let target = url.pathname.substring(1); // Get the part after the first '/'
      let newTabUrl = 'https://synthical.com/' + target + '?is_dark=true';
      chrome.tabs.create({ url: newTabUrl });
    } if (url.hostname === 'arxiv.org' && url.pathname.startsWith('/pdf/')) {
      let target = url.pathname.substring(5); // Get the part after the second '/'
      let newTabUrl = 'https://synthical.com/abs/' + getCiteNumber(target) + '?is_dark=true';
      chrome.tabs.create({ url: newTabUrl });
    }
    else {
      alert('The current tab is not a valid arXiv abstract page.');
    }
  });
});
