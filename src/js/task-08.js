const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value === '' || password.value === '') {
      alert('Усі поля повинні бути заповнені!');
      return;
    }

    const formData = {
      email: email.value,
      password: password.value
    };

    console.log(formData);

    form.reset();
  });
