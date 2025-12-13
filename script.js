// BANCO DE ITENS
const itens = [
  {
    slot: "ring1",
    nome: "Amethyst Stargazer Ring",
    tipo: "Anel",
    raridade: "Raro",
    level: 55,
    mob: "Samurai",
    drop: "Below 1%",
    imagem: "images/amethyst-ring.png"
  },
  {
    slot: "ring2",
    nome: "Amethyst Stargazer Ring",
    tipo: "Anel",
    raridade: "Raro",
    level: 55,
    mob: "Samurai",
    drop: "Below 1%",
    imagem: "images/amethyst-ring.png"
  }
];

// PEGAR SLOT DA URL
const params = new URLSearchParams(window.location.search);
const slotSelecionado = params.get("slot");

const container = document.getElementById("items-list");

// FILTRAR ITENS DO SLOT
itens
  .filter(item => item.slot === slotSelecionado)
  .forEach(item => {
    const div = document.createElement("div");
    div.className = "item-row";
    div.innerHTML = `
      <img src="${item.imagem}" class="item-icon">
      <span>${item.nome}</span>
      <span>${item.tipo}</span>
      <span class="rarity">${item.raridade}</span>
      <span>Lv ${item.level}</span>
      <span>${item.mob}</span>
      <span>${item.drop}</span>
    `;
    container.appendChild(div);
  });
