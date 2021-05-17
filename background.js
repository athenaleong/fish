try{
    importScripts('js/utils.js');
} catch (e) {
    console.log(e)
}
 

function handleUpdate(tabID, changeInfo, tabInfo) {
    var url = new URL(tabInfo.url)
    var domain = url.hostname
    console.log(domain)
    getHash(domain).then(hash =>
        getColor(hash)).then(hex => {
            // chrome.scripting.executeScript({
            //     target: {tabId: tabID},
            //     function: renderObject
            // });
            chrome.tabs.sendMessage(tabID, {hex: hex})
        }
    )    
}

chrome.tabs.onUpdated.addListener(handleUpdate);
