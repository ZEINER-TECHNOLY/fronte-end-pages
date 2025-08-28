document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ficha-medica');

  function configurarCamposCondicionais() {
    const perguntas = [
      { nome: 'visao', campo: 'campo-visao' },
      { nome: 'audicao', campo: 'campo-audicao' },
      { nome: 'membros', campo: 'campo-membros' },
      { nome: 'coluna', campo: 'campo-coluna' },
      { nome: 'sistema', campo: 'campo-sistema' },
      { nome: 'outros', campo: 'campo-outros' },
      { nome: 'medicamentos', campo: 'campo-medicamentos' },
      { nome: 'dependencias', campo: 'campo-dependencias' },
      { nome: 'alcool', campo: 'campo-alcool' }
    ];

    perguntas.forEach(p => {
      const radios = document.querySelectorAll(`input[name="${p.nome}"]`);
      const campo = document.getElementById(p.campo);

      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.value === 'sim' && radio.checked) {
            campo.style.display = 'block';
          } else if (radio.value === 'nao' && radio.checked) {
            campo.style.display = 'none';
            // Limpa os inputs dentro do campo condicional
            campo.querySelectorAll('input').forEach(input => input.value = '');
          }
        });
      });
    });
  }

  function validarFormulario() {
    // Limpa erros anteriores
    form.querySelectorAll('.erro').forEach(el => el.classList.remove('erro'));
    form.querySelectorAll('.mensagem-erro').forEach(el => el.remove());

    let valido = true;

    // Exemplo: valida que o nome não está vazio
    const nome = form.elements['nome'];
    if (!nome.value.trim()) {
      valido = false;
      mostrarErro(nome, 'O campo nome é obrigatório.');
    }

    // Exemplo: valida email se preenchido
    const email = form.elements['email'];
    if (email.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        valido = false;
        mostrarErro(email, 'Email inválido.');
      }
    }

    return valido;
  }

  function mostrarErro(input, mensagem) {
    input.classList.add('erro');
    const erro = document.createElement('div');
    erro.className = 'mensagem-erro';
    erro.innerText = mensagem;
    input.parentNode.insertBefore(erro, input.nextSibling);
  }

  configurarCamposCondicionais();

  form.addEventListener('submit', e => {
    if (!validarFormulario()) {
      e.preventDefault();
      alert('Por favor, corrija os erros no formulário antes de enviar.');
    }
  });
});
