class SignGloss {
    constructor (text) {
        this.text = text
    }

    signedHtml () {
        return this.text.
            toLowerCase().
            replaceAll(/\b[a-z]+\b/g, (sign) => {
                let firstLetter = sign[0]
                return `
                    <img height="100" width="100" src="http://www.lifeprint.com/asl101//gifs/${firstLetter}/${sign}.gif" onerror="this.remove()" />
                    <img height="100" width="100" src="http://www.lifeprint.com/asl101//gifs-animated/${sign}.gif" onerror="this.remove()" />
                `
            })
    }
}

function showSigns () {
    let element = document.getElementById("page-content")
    let signGloss = new SignGloss(element.innerText)

    element.innerHTML = signGloss.signedHtml()
}