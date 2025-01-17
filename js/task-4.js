const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
      // Запобігаємо перезавантаженню сторінки
      event.preventDefault();

      // Отримуємо доступ до елементів форми
      const { email, password } = event.currentTarget.elements;

      // Очищаємо значення від пробілів
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();

      // Перевіряємо, чи всі поля заповнені
      if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
      }

      // Створюємо об'єкт з даними форми
      const formData = {
        email: emailValue,
        password: passwordValue,
      };

      // Виводимо об'єкт у консоль
      console.log(formData);

      // Очищаємо форму
      loginForm.reset();
    });
