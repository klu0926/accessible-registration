const formCheck = () => {
  // hightlight correct and wrong input
  const checkInput = (name) => {
    // find input
    const input = document.querySelector(`#${name}`)
    if (!input) {
      console.error(`Can not find ${name} input`)
      return
    }

    // check input validity
    try {
      if (input.checkValidity()) {
        // confirm password
        if (name === 'confirm-password') {
          const password = document.querySelector('#password')
          const confirmPassword = document.querySelector('#confirm-password')
          if (password.value !== confirmPassword.value) {
            throw error('Passwords do not match')
          }
        }

        // correct
        input.classList.remove('input-wrong')
        input.classList.add('input-correct')
        const validation = document.querySelector(`#${name}-validation`)
        validation.classList.remove('show')
        return true

      } else {
        throw error('invalid')
      }
    } catch (err) {
      // wrong
      input.classList.remove('input-correct')
      input.classList.add('input-wrong')
      // show validation messages
      const validation = document.querySelector(`#${name}-validation`)
      validation.classList.add('show')
      return false
    }

  }

  // add listner to submit
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', e => {
    // prevent form submit
    e.preventDefault()
    // trim input value
    const inputs = document.querySelectorAll('.check-input')
    let isValidated = true
    inputs.forEach(input => {
      input.value = input.value.trim()
      const result = checkInput(input.id)
      if (!result) isValidated = false
    })
    // If all validated submit form
    if (isValidated) {
      document.querySelector('#registration-form').submit()
    }
  })
}

// --------- Run after document loaded
document.addEventListener('DOMContentLoaded', () => {
  formCheck()
})