const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', () => {
    
if (validationInputEl.value.length >= validationInputEl.getAttribute('data-length') ) {
        
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
} 
    else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');;
    }
});

