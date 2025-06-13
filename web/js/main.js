document.addEventListener('DOMContentLoaded', () => {
  const alertButton = document.getElementById('alertButton');

  if (alertButton) {
    alertButton.addEventListener('click', () => {
      alert('¡Botón clickeado!');
    });
  }

  const userForm = document.getElementById('userForm');
  const nombreInput = document.getElementById('nombre');
  const errorNombre = document.getElementById('errorNombre');
  const successMessage = document.getElementById('successMessage');

  const validarNombre = () => {
    const nombreValor = nombreInput.value.trim();

    errorNombre.textContent = '';
    successMessage.textContent = '';
    nombreInput.classList.remove('is-invalid');

    if (nombreValor === '') {
      errorNombre.textContent = 'El campo no puede estar vacío.';
      nombreInput.classList.add('is-invalid');
      return false; 
    }

    return true; 
  };

  if (userForm) {
    userForm.addEventListener('submit', (event) => {
      event.preventDefault(); 

      if (validarNombre()) {
        successMessage.textContent = `¡Formulario enviado con éxito! Bienvenido, ${nombreInput.value.trim()}.`;
        nombreInput.value = '';
      }
    });
  }

  if (nombreInput) {
    nombreInput.addEventListener('input', validarNombre); 
  }
});