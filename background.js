console.log("background.js running")

let siteRegistrationData = []
let currentSite = []

fetch('https://datatrust-api.herokuapp.com')
    .then(r => r.json())
    .then(r => setSiteData(r.websites))

const setSiteData = (sites) => {
    siteRegistrationData = sites
}

// 2. Grab url and registration data for newly loaded tab
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    let url = new URL(tab.url)
    url = url.hostname.split(".").slice(-2).join(".")
    returnData(url)
});

// 3. Grab url and registration data when toggling between active tabs
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let url = new URL(tabs[0].url)
        url = url.hostname.split(".").slice(-2).join(".")
        returnData(url)
        })
})

function returnData(url){
    let matchingSite = siteRegistrationData.filter(site => {
        return site.website.domain.includes(url)
    })

    if(matchingSite.length > 0){
        currentSite = matchingSite
        chrome.browserAction.setIcon({path: {"19": "/thumbsup-19.png"}});
    } else {
        currentSite = [{ company_name: "Not Registered", domain: url, trustworthy: false }]
        chrome.browserAction.setIcon({path: {"19": "/thumbsdown-19.png"}});
    }
}

// 4. When popup.js calls for website info, deliver url +
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse){
    if(request.text === "GetInfo"){ sendResponse(currentSite[0]) }
})
