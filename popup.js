document.addEventListener('DOMContentLoaded', getUrlData, false)

const div = document.querySelector('#content')

function getUrlData() {
    chrome.runtime.sendMessage({text: "GetInfo"}, displayRegistrationData);
  }

// go to options page
document.querySelector('#go_to_options').addEventListener('click', function() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options/options.html'));
    }
  });

// Eventually, the "volume" and "third-party-usage" could be "in relation" to other websites...
function displayRegistrationData(site){
    console.log(site)
    if (site.company_name == "Not Registered"){
        displayCompany(site)
        displayUnTrustworthy()
        displayRegisterSite()
    } else {
        if (site.website.collect_user_data) {
            displayCompany(site.website)
            displayVolume(site.data_types.length)
            displayThirdParty(site.noticePolicy)
            displayCookies(site.website)
            displayMoreInformation()
        } else {
            displayCompany(site.website)
            displayNoUserData()
            displayThumbsUp()
        }
    }
}

function displayCompany(site){
    const p = document.createElement('p')
    p.id = 'company_name'
    p.innerHTML = `${site.company_name} <p id="domain">${site.domain}</p>`
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

function displayThirdParty(site){
    const p = document.createElement('p')
    p.id = 'third_party_usage'
    if (site.third_parties){
        p.innerHTML = "Sell to third parties: <span>Yes</span>"
    } else {
        p.innerHTML = "Sell to third parties: <span>No</span>"
    }
    div.appendChild(p)
}

// function displayThirdPartyBar(p, site){
//     const thirdPartyBar = document.createElement('div')
//     thirdPartyBar.className = "bar"
//     site.third_party_usage < 5
//         ? thirdPartyBar.style = "background-color:green"
//         : thirdPartyBar.style = "background-color:red"
//     thirdPartyBar.style.width = `${parseInt(site.third_party_usage * 20)}px`
//     p.appendChild(thirdPartyBar)
// }

function displayVolume(typeCount){
    const p = document.createElement('p')
    p.id = 'volume'
    p.innerText = "Amount of Data Tracked"
    console.log(typeCount)
    displayVolumeBar(p, typeCount)
    div.appendChild(p)
}

function displayVolumeBar(p, typeCount){
    const volumeBar = document.createElement('div')
    volumeBar.className = "bar"
    typeCount > 18
        ? volumeBar.style = "background-color:red"
        : volumeBar.style = "background-color:green"
    volumeBar.style.width = `${typeCount * 20}px`
    p.appendChild(volumeBar)
}

function displayCookies(site){
    const p = document.createElement('p')
    p.id = "cookies"
    if (!!site.cookies){
        p.innerHTML = "Cookies: <span>Yes</span>"
    } else {
        p.innerHTML = "Cookies: <span>No</span>"
    }
    div.appendChild(p)
}

function displayNoUserData(){
    const p = document.createElement('p')
    p.id = "no-data"
    p.innerHTML = "We don't collect user data"
    div.appendChild(p)
}

function displayThumbsUp(){
    let img = document.createElement('img')
    img.id = "thumbs-up"
    img.src = "thumbsup-48.png"
    let imgContainer = document.createElement('div')
    imgContainer.id = "img_container"
    imgContainer.appendChild(img)
    div.appendChild(imgContainer)
}

function displayRegisterSite(){
    let footer = document.createElement('footer')
    let a = document.createElement('a')
    a.target = "_blank"
    a.href = "https://datatrust-a2ff3.firebaseapp.com"
    a.innerText = "Register Site"
    footer.appendChild(a)
    div.appendChild(footer)
}

function displayMoreInformation(){
    let footer = document.createElement('footer')
    let a = document.createElement('a')
    a.target = "_blank"
    a.href = "https://datatrust-a2ff3.firebaseapp.com"
    a.innerText = "More Information"
    footer.appendChild(a)
    div.appendChild(footer)
}
