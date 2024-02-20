// popup.js

document.addEventListener("DOMContentLoaded", () => {
    const parseButton = document.querySelector('#parseButton');
    parseButton.addEventListener('click', async () => {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      let url = new URL(tab.url);
      if (url.hostname === 'arxiv.org' && url.pathname.startsWith('/abs/')) {
        let target = url.pathname.substring(1); // Get the part after the first '/'
        let newTabUrl = 'https://synthical.com/' + target+ '?is_dark=true';
        chrome.tabs.create({ url: newTabUrl });
      } else {
        alert('The current tab is not a valid arXiv abstract page.');
      }
    });
  });
  
  chrome.action.onClicked.addListener(async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let url = new URL(tab.url);
    if (url.hostname === 'arxiv.org' && url.pathname.startsWith('/abs/')) {
      let target = url.pathname.substring(1); // Get the part after the first '/'
      let newTabUrl = 'https://synthical.com/' + target+ '?is_dark=true';
      chrome.tabs.create({ url: newTabUrl });
    } else {
      alert('The current tab is not a valid arXiv abstract page.');
    }
  });