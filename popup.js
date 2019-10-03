document.addEventListener('DOMContentLoaded', getUrlData, false)

const div = document.querySelector('#content')

function getUrlData() {
    chrome.runtime.sendMessage({text: "GetInfo"}, displayRegistrationData);
  }

document.querySelector('#go_to_options').addEventListener('click', function() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options/options.html'));
    }
  });

// Eventually, the "volume" and "third-party-usage" could be "in relation" to other websites...
function displayRegistrationData(json){
    if (json.company_name == "Not Registered"){
        displayCompany(json)
        displayUnTrustworthy()
        displayRegisterSite()
    } else {
        displayCompany(json)
        displayThirdParty(json)
        displayVolume(json)
        displayCookies(json)
        displayMoreInformation()
    }
}

function displayCompany(json){
    const p = document.createElement('p')
    p.id = 'company_name'
    p.innerHTML = `${json.company_name} <p id="domain">${json.domain.replace(/46/g, ".")}</p>`
    div.appendChild(p)
}

function displayUnTrustworthy(){
    let img = document.createElement('img')
    img.id = "unauthorized_image"
    img.src = "thumbsdown-48.png"
    let imgContainer = document.createElement('div')
    imgContainer.id = "img_container"
    imgContainer.appendChild(img)
    div.appendChild(imgContainer)
}

function displayThirdParty(json){
    const p = document.createElement('p')
    p.id = 'third_party_usage'
    p.innerText = "Third Party Usage"
    displayThirdPartyBar(p, json)
    div.appendChild(p)
}

function displayThirdPartyBar(p, json){
    const thirdPartyBar = document.createElement('div')
    thirdPartyBar.className = "bar"
    json.third_party_usage < 5
        ? thirdPartyBar.style = "background-color:green"
        : thirdPartyBar.style = "background-color:red"
    thirdPartyBar.style.width = `${parseInt(json.third_party_usage * 20)}px`
    p.appendChild(thirdPartyBar)
}

function displayVolume(json){
    const p = document.createElement('p')
    p.id = 'volume'
    p.innerText = "Amount of Data Tracked"
    displayVolumeBar(p, json)
    div.appendChild(p)
}

function displayVolumeBar(p, json){
    const volumeBar = document.createElement('div')
    volumeBar.className = "bar"
    json.volume < 5
        ? volumeBar.style = "background-color:green"
        : volumeBar.style = "background-color:red"
    volumeBar.style.width = `${parseInt(json.volume * 20)}px`
    p.appendChild(volumeBar)
}

function displayCookies(json){
    const p = document.createElement('p')
    p.id = "cookies"
    if (!!json.cookies){
        p.innerHTML = "Cookies: Yes"
    } else {
        p.innerHTML = "Cookies: No"
    }
    console.log(p)
    div.appendChild(p)
}

function displayRegisterSite(){
    let footer = document.createElement('footer')
    let a = document.createElement('a')
    a.target = "_blank"
    a.href = "https://datatrust-fcec5.firebaseapp.com/"
    a.innerText = "Register Site"
    footer.appendChild(a)
    div.appendChild(footer)
}

function displayMoreInformation(){
    let footer = document.createElement('footer')
    let a = document.createElement('a')
    a.target = "_blank"
    a.href = "https://datatrust-fcec5.firebaseapp.com/"
    a.innerText = "More Information"
    footer.appendChild(a)
    div.appendChild(footer)
}

// const $ = {
//    domain: function(){}
// }
