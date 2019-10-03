const sideNav = document.querySelector('.sidenav')
const mainContent = document.querySelector('.main_content')

// classList.add(fortabs)
const settingsLi = document.querySelector('#settings')
settingsLi.style = "font-weight:bold;background-color:#fff;"
localStorage.setItem('currentTab', '#settings')

const themesLi = document.querySelector('#themes')
const aboutLi = document.querySelector('#about')
const supportLi = document.querySelector('#support')
const participateLi = document.querySelector('#participate')
const searchLi = document.querySelector('#search')

settingsLi.addEventListener('click', () => showSettings())
settingsLi.addEventListener('mouseleave', () => {
    settingsLi.querySelector('svg').style = "fill:rgb(102, 102, 102)"
})
settingsLi.addEventListener('mouseenter', () => {
    settingsLi.querySelector('svg').style = "fill:rgb(52,107,168);"
})

themesLi.addEventListener('click', () => showThemes())
themesLi.addEventListener('mouseleave', () => {
    themesLi.querySelector('svg').style = "fill:rgb(102, 102, 102)"
})
themesLi.addEventListener('mouseenter', () => {
    themesLi.querySelector('svg').style = "fill:rgb(52,107,168);"
})

aboutLi.addEventListener('click', () => showAbout())
aboutLi.addEventListener('mouseleave', () => {
  aboutLi.querySelector('svg').style = "fill:rgb(102, 102, 102)"
})
aboutLi.addEventListener('mouseenter', () => {
  aboutLi.querySelector('svg').style = "fill:rgb(52,107,168);"
})

supportLi.addEventListener('click', () => showSupport())
supportLi.addEventListener('mouseleave', () => {
  supportLi.querySelector('svg').style = "fill:rgb(102, 102, 102);"
})
supportLi.addEventListener('mouseenter', () => {
  supportLi.querySelector('svg').style = "fill:rgb(52,107,168);"
})

participateLi.addEventListener('click', () => showSupport())
participateLi.addEventListener('mouseleave', () => {
  participateLi.querySelector('svg').style = "fill:rgb(102, 102, 102);"
})
participateLi.addEventListener('mouseenter', () => {
  participateLi.querySelector('svg').style = "fill:black;"
})

searchLi.addEventListener('click', () => showSupport())
searchLi.addEventListener('mouseleave', () => {
  searchLi.querySelector('svg').style = "fill:rgb(102, 102, 102);"
})
searchLi.addEventListener('mouseenter', () => {
  searchLi.querySelector('svg').style = "fill:black;"
})

const showSettings = () => {
  let currentTab = document.querySelector('.current_tab')
  if (!(currentTab.id === "first_tab")){
    mainContent.removeChild(currentTab)
    createSettingsPage()
  }
}

const createSettingsPage = () => {
  createSettingsHeader()
  let lastLi = document.querySelector(localStorage.currentTab)
  lastLi.style = ""
  localStorage.setItem('currentTab', '#settings')
}

function createSettingsHeader(){
  const tab = document.createElement('h3')
  tab.classList.add('current_tab')
  tab.id = "first_tab"
  tab.innerText = "Settings!"
  settingsLi.style = "font-weight:bold;background-color:#fff;"
  mainContent.appendChild(tab)
}

const showThemes = () => {
  let currentTab = document.querySelector('.current_tab')
  if (!(currentTab.id === "second_tab")){
    mainContent.removeChild(currentTab)
    createThemesPage()
  }
}

const createThemesPage = () => {
  mainContent.innerHTML = ""
  const tab = document.createElement('h3')
  tab.classList.add('current_tab')
  tab.id = "second_tab"
  tab.innerText = "Themes!"
  themesLi.style = "font-weight:bold;background-color:#fff;"
  let lastLi = document.querySelector(localStorage.currentTab)
  lastLi.style = ""
  localStorage.setItem('currentTab', '#themes')
  mainContent.appendChild(tab)
}

const showParticipate = () => {
  let currentTab = document.querySelector('.current_tab')
  if (!(currentTab.id === "third_tab")){
    mainContent.removeChild(currentTab)
    createParticipatePage()
  }
}

const createParticipatePage = () => {
  mainContent.innerHTML = ""
  const tab = document.createElement('h3')
  tab.classList.add('current_tab')
  tab.id = "third_tab"
  tab.innerText = "Participate!"
  participateLi.style = "font-weight:bold;background-color:#fff;"
  let lastLi = document.querySelector(localStorage.currentTab)
  lastLi.style = ""
  localStorage.setItem('currentTab', '#participate')
  mainContent.appendChild(tab)
}

const showAbout = () => {
  let currentTab = document.querySelector('.current_tab')
  if (!(currentTab.id === "fourth_tab")){
    mainContent.removeChild(currentTab)
    createAboutPage()
  }
}

const createAboutPage = () => {
  mainContent.innerHTML = ""
  const tab = document.createElement('h3')
  tab.classList.add('current_tab')
  tab.id = "fourth_tab"
  tab.innerText = "About!"
  aboutLi.style = "font-weight:bold;background-color:#fff;"
  let lastLi = document.querySelector(localStorage.currentTab)
  lastLi.style = ""
  localStorage.setItem('currentTab', '#about')
  mainContent.appendChild(tab)
}

const showSupport = () => {
  let currentTab = document.querySelector('.current_tab')
  if (!(currentTab.id === "fifth_tab")){
    mainContent.removeChild(currentTab)
    createSupportPage()
  }
}

const createSupportPage = () => {
  mainContent.innerHTML = ""
  const tab = document.createElement('h3')
  tab.classList.add('current_tab')
  tab.id = "fifth_tab"
  tab.innerText = "Support!"

  supportLi.style = "font-weight:bold;background-color:#fff;"
  let lastLi = document.querySelector(localStorage.currentTab)
  lastLi.style = ""
  localStorage.setItem('currentTab', '#support')
  mainContent.appendChild(tab)
}

const showSearch = () => {
  let currentTab = document.querySelector('.current_tab')
  if (!(currentTab.id === "sixth_tab")){
    mainContent.removeChild(currentTab)
    createSearchPage()
  }
}

const createSearchPage = () => {
  mainContent.innerHTML = ""
  const tab = document.createElement('h3')
  tab.classList.add('current_tab')
  tab.id = "sixth_tab"
  tab.innerText = "Search!"
  searchLi.style = "font-weight:bold;background-color:#fff;"
  let lastLi = document.querySelector(localStorage.currentTab)
  lastLi.style = ""
  localStorage.setItem('currentTab', '#search')
  mainContent.appendChild(tab)
}
