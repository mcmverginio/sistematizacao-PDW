  const form = document.querySelector('.formulario');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Formulário enviado com sucesso!');

    form.reset();
  });
