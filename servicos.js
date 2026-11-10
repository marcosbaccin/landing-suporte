const WHATSAPP = "https://wa.me/5564999081639";

const grupos = [
  {
    titulo: "Computadores e notebooks",
    itens: [
      { nome: "Limpeza Interna + Revisão (Desktop)", img: "limpeza_interna_desktop.jpg", descricao: "Checkup completo, limpeza do gabinete e coolers, limpeza da placa de vídeo e troca de pasta térmica.", preco: "R$ 290,00" },
      { nome: "Limpeza Interna + Revisão (Notebook)", img: "limpeza_interna_notebook.jpg", descricao: "Checkup, limpeza interna, lubrificação dos coolers e troca de pasta térmica do processador e da GPU.", preco: "R$ 264,00" },
      { nome: "Formatação Completa", img: "formatacao.png", descricao: "Instalação do Windows, programas básicos e otimizações, com backup de até 50 GB incluso.", preco: "R$ 177,00" },
      { nome: "Formatação + Upgrade de SSD", img: "upgrade_hd_ssd.jpg", descricao: "Troca ou upgrade para SSD, com instalação completa do Windows e otimizações.", preco: "R$ 177,00" },
      { nome: "Montagem Completa", img: "montagem.jpg", descricao: "Montagem das peças, organização dos cabos, configuração de RGB e instalação do Windows com testes.", preco: "R$ 277,00" },
      { nome: "Remontagem + Limpeza e Revisão", img: "remontagem.png", descricao: "Desmontagem e limpeza das peças antigas, remontagem e checkup completo.", preco: "R$ 290,00" },
      { nome: "Reparo de Carcaça (Notebook)", img: "carcaca.jpg", descricao: "Reparo da carcaça e lubrificação das dobradiças, com retirada e entrega.", preco: "R$ 395,00" },
      { nome: "Troca de Teclado Interno", img: "teclado.jpg", descricao: "Substituição e solda do teclado interno do notebook, com retirada e entrega.", preco: "R$ 395,00" },
      { nome: "Checkup Geral", img: "otimizacao.png", descricao: "Avaliação de hardware, otimizações do sistema e sugestões de upgrades futuros.", preco: "R$ 127,00" }
    ]
  },
  {
    titulo: "Redes e conectividade",
    itens: [
      { nome: "Configuração de Wi-Fi (Roteador/Repetidor)", img: "roteador.jpg", descricao: "Posicionamento, configuração do modo correto e testes de sinal nos cômodos.", preco: "R$ 100,00" },
      { nome: "Compartilhamento de Arquivos em Rede", img: "compartilhamento.jpg", descricao: "Pastas compartilhadas e mapeamento de unidades entre até 3 computadores.", preco: "R$ 100,00" },
      { nome: "Crimpagem de Cabo RJ45", img: "crimpagem.jpg", descricao: "Crimpagem com teste elétrico ponto a ponto. Até 2 conectores inclusos.", preco: "R$ 85,00" }
    ]
  },
  {
    titulo: "Impressoras",
    itens: [
      { nome: "Configuração Wi-Fi da Impressora", img: "wifi_impressora.jpg", descricao: "Conexão à rede sem fio, IP fixo e teste de impressão e digitalização.", preco: "R$ 88,00" },
      { nome: "Correção de Falhas de Impressão", img: "falhas_de_impressao.jpg", descricao: "Limpeza, calibração e alinhamento dos cabeçotes, com testes de qualidade.", preco: "R$ 100,00" },
      { nome: "Remoção de Papel Atolado", img: "papel_atolado.jpg", descricao: "Remoção de papel preso, limpeza dos roletes e testes de tração.", preco: "R$ 148,00" },
      { nome: "Desobstrução de Cabeçote", img: "desentupimento_cabecote.jpeg", descricao: "Desobstrução química e lavagem técnica do cabeçote, com retirada e entrega.", preco: "R$ 395,00" },
      { nome: "Instalação e Configuração de Impressora", img: "instalar_impressora.jpg", descricao: "Drivers oficiais, conexão por USB ou rede e página de teste.", preco: "R$ 88,00" },
      { nome: "Troca de Componentes + Reset Técnico", img: "troca_de_almofada.jpg", descricao: "Substituição de componentes como almofadas e rolete, com reset do contador de páginas. Peça cobrada à parte.", preco: "R$ 395,00" }
    ]
  }
];

function criarCard(item) {
  const msg = encodeURIComponent(`Oi! Quero um orçamento de: ${item.nome}`);
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <img src="img/${item.img}" alt="${item.nome}" loading="lazy" width="600" height="400">
    <div class="card-body">
      <h4>${item.nome}</h4>
      <p>${item.descricao}</p>
      ${item.preco ? `<p class="preco">${item.preco}</p>` : ""}
      <a class="btn-card" href="${WHATSAPP}?text=${msg}" target="_blank" rel="noopener">Pedir orçamento</a>
    </div>`;
  return card;
}

function renderizarServicos() {
  const container = document.getElementById("lista-servicos");
  grupos.forEach(grupo => {
    const bloco = document.createElement("div");
    bloco.className = "grupo";
    bloco.innerHTML = `<h3>${grupo.titulo}</h3><div class="cards"></div>`;
    const cards = bloco.querySelector(".cards");
    grupo.itens.forEach(item => cards.appendChild(criarCard(item)));
    container.appendChild(bloco);
  });
}

document.addEventListener("DOMContentLoaded", renderizarServicos);
