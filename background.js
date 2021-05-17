function handleUpdate(tabID, changeInfo, tabInfo) {
    var url = new URL(tabInfo.url)
    var domain = url.hostname
}


chrome.tabs.onUpdated.addListener(handleUpdate);