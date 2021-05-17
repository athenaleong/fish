// function Context() {

//     this._Sha256 = async (msg) => {
//         const msgBuffer = new TextEncoder().encode(msg);                    
//         const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
//         return hashBuffer;
//     };

//     // this._GetDomainHash = async () => {
//     //     const dn = window.location.hostname;
//     //     console.log("Domain name: ", dn)
//     //     return this._Sha256(dn);
//     // };

//     this.GetColour = async () => {
//         this._domainHash.then(async (h)=>{
//             console.log(h);
//             console.log(h.getInt8(0))
//             //console.log(`rgb (${h[0]}, ${h[1]}, ${h[1]})`);
//         })
//     };
    
//     this.GetSymbol = async () => {
        
//     };

//     this._domainHash = this._GetDomainHash();
// }

var getHash = async function(msg) {
    const msgBuffer = new TextEncoder().encode(msg);                    
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    return hashBuffer;
}

var getColor = async function(buffer) {
    const view = new DataView(buffer)
    h = view.getUint32(0) % 360
    s = view.getUint32(1) % 50 + 30
    l = view.getUint32(2) % 60 + 20
    hex = _hslToHex(h, s, l)
    return hex
}   

function _hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
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

