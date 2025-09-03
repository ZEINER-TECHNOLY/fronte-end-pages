document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ficha-medica');
  const botaoExportar = document.getElementById('exportar-pdf');

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

      campo.style.display = 'none';

      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.value === 'sim' && radio.checked) {
            campo.style.display = 'block';
          } else if (radio.value === 'nao' && radio.checked) {
            campo.style.display = 'none';
            campo.querySelectorAll('input, textarea').forEach(input => input.value = '');
          }
        });
      });
    });
  }

  function validarFormulario() {
    form.querySelectorAll('.erro').forEach(el => el.classList.remove('erro'));
    form.querySelectorAll('.mensagem-erro').forEach(el => el.remove());

    let valido = true;

    const camposObrigatorios = [
      { name: 'nome', mensagem: 'O campo nome é obrigatório.' },
      { name: 'contacto', mensagem: 'O campo contacto é obrigatório.' },
      { name: 'nacionalidade', mensagem: 'O campo nacionalidade é obrigatório.' },
      { name: 'categorias', mensagem: 'O campo categorias é obrigatório.' },
      { name: 'validade1', mensagem: 'O campo validade grupo 1 é obrigatório.' },
      { name: 'validade2', mensagem: 'O campo validade grupo 2 é obrigatório.' }
    ];

    camposObrigatorios.forEach(campo => {
      const input = form.elements[campo.name];
      if (!input || !input.value.trim()) {
        valido = false;
        mostrarErro(input, campo.mensagem);
      }
    });

    const email = form.elements['email'];
    if (email && email.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        valido = false;
        mostrarErro(email, 'Email inválido.');
      }
    }

    return valido;
  }

  function mostrarErro(input, mensagem) {
    if (!input) return;
    input.classList.add('erro');
    const erro = document.createElement('div');
    erro.className = 'mensagem-erro';
    erro.innerText = mensagem;
    input.parentNode.insertBefore(erro, input.nextSibling);
  }

  configurarCamposCondicionais();

  form.addEventListener('submit', e => {
    e.preventDefault(); // evita envio real para que possamos controlar
    if (validarFormulario()) {
      // Aqui você pode fazer o envio via AJAX ou qualquer outra coisa

      // Habilita o botão exportar PDF só depois de validação aprovada
      botaoExportar.disabled = false;

      alert('Formulário enviado com sucesso! Agora você pode exportar o PDF.');
    } else {
      alert('Por favor, corrija os erros no formulário antes de enviar.');
    }
  });
});
