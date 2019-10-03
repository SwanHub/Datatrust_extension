console.log("background.js running")

let siteRegistrationData = {}

// 2. Grab url and registration data for newly loaded tab
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    let url = new URL(tab.url)
    let domain = url.hostname.replace(/\./g, "46")
    console.log(domain)
    fetch(`https://datatrust-api.herokuapp.com/websites/${domain}`)
        .then(response => response.json())
        .then(json => { returnData(json.core_data, domain) })
});

// 3. Grab url and registration data when toggling between active tabs
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let url = new URL(tabs[0].url)
        let domain = url.hostname.replace(/\./g, "46")
        console.log(domain)
        fetch(`https://datatrust-api.herokuapp.com/websites/${domain}`)
            .then(response => response.json())
            .then(json => { returnData(json.core_data, domain) })
        })
})

function returnData(json, domain){
    if(!!json){
        siteRegistrationData = json
        chrome.browserAction.setIcon({path: {"19": "/thumbsup-19.png"}});
    } else {
        siteRegistrationData = { company_name: "Not Registered", domain: domain, trustworthy: false }
        chrome.browserAction.setIcon({path: {"19": "/thumbsdown-19.png"}});
    }
}

// 4. When popup.js calls for website info, deliver url +
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse){
    if(request.text === "GetInfo"){ sendResponse(siteRegistrationData) }
})
