var renderObject = function(hex) {
    obj = document.createElement('div');
    zIndex = _getTopZIndex();
    obj.style.zIndex = zIndex;
    obj.style.background = hex;
    obj.style.width = '50px';
    obj.style.height = '50px';
    obj.id = "Signal";
    console.log(`hex : ${hex}`)
    document.body.appendChild(obj);
}

function _getTopZIndex() {
    var zIndex = 0
    let all = document.getElementsByTagName('*');
    for (var i = all.length; i > 0; i--) {
        let style = getComputedStyle(all[i-1]);
        if (!style) {
            continue;
        }
        let z = parseInt(style.getPropertyValue('z-index'));
        if (z > zIndex) {
            zIndex = z + 1;
        }
    } 
    return zIndex
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        renderObject(request.hex);
    }
)