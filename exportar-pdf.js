document.addEventListener('DOMContentLoaded', () => {
  const exportarBtn = document.getElementById('exportar-pdf');
  if (!exportarBtn) return;

  exportarBtn.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const form = document.getElementById('ficha-medica');
    let y = 15;

    doc.setFontSize(16);
    doc.text("📋 Ficha Médica", 105, y, { align: "center" });
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(0);

    function adicionarLinha(titulo, valor) {
      if (y > 270) {
        doc.addPage();
        y = 15;
      }
      doc.text(`${titulo}: ${valor || '---'}`, 15, y);
      y += 8;
    }

    // 1. Identificação Pessoal
    doc.setFont(undefined, "bold");
    doc.text("1. Identificação Pessoal", 15, y);
    y += 8;
    doc.setFont(undefined, "normal");

    adicionarLinha("Nome", form.nome.value);
    adicionarLinha("Idade", form.idade.value);
    adicionarLinha("Residência", form.residencia.value);
    adicionarLinha("Nacionalidade", form.nacionalidade.value);
    adicionarLinha("Naturalidade", form.naturalidade.value);
    adicionarLinha("Contacto", form.contacto.value);
    adicionarLinha("Email", form.email.value);
    adicionarLinha("BI / Passaporte", form.bi.value);
    adicionarLinha("Emitido em", form.emitido.value);
    adicionarLinha("Até", form.ate.value);
    adicionarLinha("Habilitações Literárias", form.habilitacoes.value);
    adicionarLinha("Categorias", form.categorias.value);
    adicionarLinha("Validade Grupo 1", form.validade1.value);
    adicionarLinha("Validade Grupo 2", form.validade2.value);
    adicionarLinha("Restrições / Adaptações", form.restricoes.value);

    // 2. Antecedentes de Saúde
    doc.setFont(undefined, "bold");
    doc.text("2. Antecedentes de Saúde", 15, y);
    y += 8;
    doc.setFont(undefined, "normal");

    function adicionarCondicional(nomeCampo, titulo, nomeTextarea) {
      const valor = form[nomeCampo].value;
      adicionarLinha(titulo, valor === "sim" ? "Sim" : "Não");
      if (valor === "sim" && form[nomeTextarea]) {
        const texto = form[nomeTextarea].value.trim();
        if (texto) {
          adicionarLinha("➤ Detalhes", texto);
        }
      }
    }

    adicionarCondicional("visao", "Problemas de visão", "visao_quais");
    adicionarCondicional("audicao", "Problemas de audição", "audicao_quais");
    adicionarCondicional("membros", "Limitações dos membros", "membros_quais");
    adicionarCondicional("coluna", "Limitações da coluna", "coluna_quais");
    adicionarCondicional("sistema", "Problemas do sistema nervoso", "sistema_quais");
    adicionarCondicional("outros", "Outros problemas de saúde", "saude_quais");

    adicionarCondicional("medicamentos", "Consumo de medicamentos", "medicamentos_quais");
    if (form.medicamentos.value === "sim" && form.quantidade) {
      adicionarLinha("➤ Quantidade por dia", form.quantidade.value);
    }

    adicionarCondicional("dependencias", "Dependência (álcool ou drogas)", "dependencia_quais");
    adicionarCondicional("alcool", "Consumo de bebidas alcoólicas", "bebidas_quais");

    // Salvar como PDF
    doc.save("ficha-medica.pdf");
  });
});
