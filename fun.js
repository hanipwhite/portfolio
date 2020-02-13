if (window.innerWidth > 1300) {
  /* This script supports IE9+ */
  ;(function() {
    const imageHolder = document.querySelector('.modal__imageHolder img')
    const imageData = {
      1: 'bilder/napoleon.gif',
      2: 'bilder/soda_good.gif',
      3: 'bilder/branding.gif',
      4: 'bilder/musicplayer.gif',
      5: 'bilder/gothenburg_fish.gif',
      6: 'bilder/instruktion.gif'
    }
    // console.log(imageHolder)

    /* Opening modal window function */
    function openModal() {
      /* Get trigger element */
      const modalTrigger = document.getElementsByClassName('jsModalTrigger')

      /* Set onclick event handler for all trigger elements */
      for (let i = 0; i < modalTrigger.length; i++) {
        modalTrigger[i].onclick = function() {
          const target = this.getAttribute('href').substr(1)
          const imageTarget = this.dataset.fun
          const modalWindow = document.getElementById(target)
          const imageToAdd = Object.keys(imageData).filter(
            image => image === imageTarget
          )
          imageHolder.src = imageData[imageToAdd[0]]

          modalWindow.classList
            ? modalWindow.classList.add('open')
            : (modalWindow.className += ' ' + 'open')
        }
      }
    }

    function closeModal() {
      /* Get close button */
      const closeButton = document.getElementsByClassName('jsModalClose')
      const closeOverlay = document.getElementsByClassName('jsOverlay')

      /* Set onclick event handler for close buttons */
      for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          const modalWindow = this.parentNode.parentNode

          modalWindow.classList
            ? modalWindow.classList.remove('open')
            : (modalWindow.className = modalWindow.className.replace(
                new RegExp(
                  '(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)',
                  'gi'
                ),
                ' '
              ))
        }
      }

      /* Set onclick event handler for modal overlay */
      for (let i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          const modalWindow = this.parentNode

          modalWindow.classList
            ? modalWindow.classList.remove('open')
            : (modalWindow.className = modalWindow.className.replace(
                new RegExp(
                  '(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)',
                  'gi'
                ),
                ' '
              ))
        }
      }
    }

    /* Handling domready event IE9+ */
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn()
      } else {
        document.addEventListener('DOMContentLoaded', fn)
      }
    }

    /* Triggering modal window function after dom ready */
    ready(openModal)
    ready(closeModal)
  })()
}
