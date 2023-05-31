chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.indexOf("cocc.edu") !== -1) {
      return { redirectUrl: "42.zip" };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
