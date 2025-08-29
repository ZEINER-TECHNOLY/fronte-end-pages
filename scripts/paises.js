document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('nacionalidade');

  const paises = [
    "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola",
    "Antígua e Barbuda", "Arábia Saudita", "Argélia", "Argentina", "Arménia", "Azerbaijão",
    "Bahamas", "Bangladexe", "Barém", "Barbados", "Belize", "Benim", "Bielorrússia",
    "Bolívia", "Botsuana", "Brasil", "Brunei", "Bulgária", "Burquina Faso", "Burúndi",
    "Butão", "Cabo Verde", "Camarões", "Camboja", "Canadá", "Catar", "Cazaquistão",
    "Chile", "China", "Chipre", "Colômbia", "Comores", "Congo", "Coreia do Norte",
    "Coreia do Sul", "Costa Rica", "Côte d'Ivoire", "Croácia", "Cuba", "Dinamarca",
    "Djibouti", "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador",
    "Eritreia", "Eslováquia", "Eslovênia", "Espanha", "Estónia", "Eswatini", "Estados Unidos",
    "Etiópia", "Filipinas", "Finlândia", "França", "Gabão", "Gâmbia", "Geórgia", "Ghana",
    "Granada", "Grécia", "Guatemala", "Guiana", "Guiné", "Guiné Equatorial", "Guiné-Bissau",
    "Haiti", "Holanda", "Honduras", "Hungria", "Iémen", "Índia", "Indonésia", "Irã",
    "Iraque", "Irlanda", "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia",
    "Kosovo", "Kuwait", "Laos", "Lesoto", "Letónia", "Líbano", "Libéria", "Líbia",
    "Liechtenstein", "Lituânia", "Luxemburgo", "Madagáscar", "Malásia", "Maláui",
    "Maldivas", "Mali", "Malta", "Marrocos", "Maurícia", "Mauritânia", "México",
    "Mianmar", "Moçambique", "Moldávia", "Mônaco", "Mongólia", "Montenegro", "Namíbia",
    "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia", "Omã",
    "Países Baixos", "Paquistão", "Panamá", "Paraguai", "Peru", "Polônia", "Portugal",
    "Quênia", "Quirguistão", "Reino Unido", "República Centro-Africana", "República Checa",
    "República Dominicana", "Romênia", "Ruanda", "Rússia", "Salvador", "San Marino",
    "Santa Lúcia", "São Cristóvão e Névis", "São Tomé e Príncipe", "São Vicente e Granadinas",
    "Seicheles", "Senegal", "Serra Leoa", "Sérvia", "Singapura", "Síria", "Sri Lanka",
    "Sudão", "Sudão do Sul", "Suécia", "Suíça", "Suriname", "Tailândia", "Tajiquistão",
    "Tanzânia", "Timor-Leste", "Togo", "Trindade e Tobago", "Tunísia", "Turcomenistão",
    "Turquia", "Ucrânia", "Uganda", "Uruguai", "Usbequistão", "Vaticano", "Venezuela",
    "Vietname", "Zâmbia", "Zimbábue"
  ];

  // Limpa o select e insere a opção padrão
  select.innerHTML = '<option value="">Selecione um país</option>';

  // Ordena alfabeticamente (sem acentos interferirem)
  paises.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));

  // Insere opções
  paises.forEach(pais => {
    const option = document.createElement('option');
    option.value = pais;
    option.textContent = pais;
    select.appendChild(option);
  });
});
