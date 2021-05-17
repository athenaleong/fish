function Context() {

    this._Sha256 = async (msg) => {
        const msgBuffer = new TextEncoder().encode(msg);                    
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        return hashBuffer;
    };

    // this._GetDomainHash = async () => {
    //     const dn = window.location.hostname;
    //     console.log("Domain name: ", dn)
    //     return this._Sha256(dn);
    // };

    this.GetColour = async () => {
        this._domainHash.then(async (h)=>{
            console.log(h);
            console.log(h.getInt8(0))
            //console.log(`rgb (${h[0]}, ${h[1]}, ${h[1]})`);
        })
    };
    
    this.GetSymbol = async () => {
        
    };

    this._domainHash = this._GetDomainHash();
}

function UpdateHTML() {



}

var c = new Context();
c.GetColour();