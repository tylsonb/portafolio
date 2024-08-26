document.addEventListener("DOMContentLoaded", function (event) {
  const formulario = document.querySelector("form");

  // Función para validar si un campo está vacío
  function validarCampoVacio(event) {
    const campo = event.target;
    if (campo.value.trim() === "") {
      campo.classList.add("is-invalid");
      campo.setCustomValidity("Este campo no puede estar vacío");
    } else {
      campo.classList.remove("is-invalid");
      campo.setCustomValidity("");
    }
    campo.reportValidity(); // Muestra el mensaje de error
  }

  // Añadir el evento 'blur' a cada campo del formulario
  const campos = formulario.querySelectorAll("input, textarea");
  campos.forEach(function (campo) {
    campo.addEventListener("blur", validarCampoVacio);
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar todos los campos al enviar el formulario
    let formularioValido = true;
    campos.forEach(function (campo) {
      validarCampoVacio({ target: campo });
      if (!campo.checkValidity()) {
        formularioValido = false;
      }
    });

    if (!formularioValido) {
      alert("Hay campos vacíos o inválidos.");
      return; // Detiene el envío si hay campos vacíos o inválidos
    } else {
      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.top = "80%";
      modal.style.left = "50%";
      modal.style.transform = "translate(-50%, -50%)";
      modal.style.color = "#FFF";
      modal.style.backgroundColor = "#1CB698";
      modal.style.padding = "20px";
      modal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
      modal.innerHTML =
        "<p>Hemos recibido tu mensaje y te contactaremos lo antes posible</p><button onclick='this.parentElement.style.display = \"none\";'>Cerrar</button>";
      document.body.appendChild(modal);
    }

    formulario.reset();
  });
});
