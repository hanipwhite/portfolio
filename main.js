const loadingScreen = document.querySelector('.loading-screen')
const allContent = document.querySelector('.all-content')
const work = document.querySelector('#work')
const body = document.querySelector('body')
const arrowSvg = document.querySelector('.first-page-content > a > svg')
const burgermenu = document.querySelector('.burgermenu')
const closebtn = document.querySelector('.closebtn')
const hiddenContent = document.querySelector('.hidden-content')
const toggleContentButton = [
  ...document.querySelectorAll('.toggle-content-button')
]

const loaded = localStorage.getItem('loaded')

const load = () => {
  if (window.location.pathname !== '/') {
    document.querySelector('html').style.overflow = 'initial'
    document.querySelector('body').style.overflow = 'initial'
    hiddenContent.style.overflow = 'none'
    return
  }
  if (loaded !== null) {
    console.log('2')
    allContent.classList.remove('remove-from-dom')
    work.classList.remove('remove-from-dom')
    body.style.overflow = 'initial'
    document.querySelector('html').style.overflow = 'initial'
    loadingScreen.remove()
    return
  }

  setTimeout(() => {
    loadingScreen.classList.add('hide-loading')
    allContent.classList.remove('remove-from-dom')
    work.classList.remove('remove-from-dom')
    body.style.overflow = 'initial'
    document.querySelector('html').style.overflow = 'initial'
    localStorage.setItem('loaded', true)
  }, 4200)

  setTimeout(() => {
    loadingScreen.remove()
  }, 4200)
}

burgermenu.addEventListener('click', () => {
  openNav()
})
closebtn.addEventListener('click', () => {
  closeNav()
})

function openNav() {
  document.querySelector('#mySidenav').style.zIndex = 2
  document.getElementById('mySidenav').style.opacity = '1'
  document.querySelector('nav').style.zIndex = 0
  document.querySelector('body').style.overflow = 'hidden'
}

function closeNav() {
  document.getElementById('mySidenav').style.opacity = '0'
  document.querySelector('.sidenav').style.zIndex = 0
  document.querySelector('#mySidenav').style.zIndex = 0
  document.querySelector('nav').style.zIndex = 2
  document.querySelector('body').style.overflow = 'initial'
}
load()

toggleContentButton[0].addEventListener('click', () => {
  toggleContentButton[0].classList.add('hide-button')
  hiddenContent.classList.toggle('show-content')
})

toggleContentButton[1].addEventListener('click', () => {
  toggleContentButton[0].classList.remove('hide-button')
  hiddenContent.classList.toggle('show-content')
})
