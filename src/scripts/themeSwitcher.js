const htmlEl = document.querySelector('html')

const buttons = document.querySelectorAll('.theme-switch button')
const settingsModal = document.querySelector('#settings-modal')

const settings = document.querySelector('#settings')

buttons.forEach(button =>
  button.addEventListener('click', function handleClick(event) {
    let selectedTheme = button.dataset.themeOption
    // currentTheme = selectedTheme

    htmlEl.setAttribute('data-theme', selectedTheme)
  })
)

document.onkeydown = function (evt) {
  evt = evt || window.event
  if (evt.key === 'Escape' && settingsModal.open) {
    htmlEl.classList.remove('overflow-hidden')
  }
}

function setButtonFocus() {
  buttons.forEach(button => {
    if (button.dataset.themeOption === htmlEl.dataset.theme) {
      button.setAttribute('data-active', true)
    } else {
      button.setAttribute('data-active', false)
    }
  })
}

function openCheck(dialog) {
  if (dialog.open) {
    htmlEl.classList.add('overflow-hidden')
  } else {
    htmlEl.classList.remove('overflow-hidden')
  }
}

settings.addEventListener('click', () => {
  setButtonFocus()
  settingsModal.showModal()
  openCheck(settingsModal)
})

const close = document.querySelector('#close')
close.addEventListener('click', () => {
  settingsModal.close()
  openCheck(settingsModal)
})
