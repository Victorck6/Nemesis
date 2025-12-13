// ===== BANCO DE ITENS =====
const ITEMS = [
  {
    id: "amethyst_stargazer_ring",
    nome: "Amethyst Stargazer Ring",
    tipo: "Anel",
    raridade: "Rare",
    level: 55,
    slots: ["anel1", "anel2"],

    mob: "Samurai",
    drop: "Below 1%",

    descricao:
      "The gem set into this ring is said to have fallen from the night sky generations ago, discovered embedded within the stone of a remote mountain shrine. Unlike ordinary crystals, it does not shine with reflected light, but with a quiet glow that responds to chakra.",

    imagem: "assets/items/rings/amethyst-stargazer-ring.png"
  }
];

// ===== LER SLOT DA URL =====
const params = new URLSearchParams(window.location.search);
const slotAtual = params.get("slot");

// ===== CONTAINER =====
const container = document.getElementById("items-container");

if (container && slotAtual) {
  const filtrados = ITEMS.filter(item =>
    item.slots.includes(slotAtual)
  );

  if (filtrados.length === 0) {
    container.innerHTML = "<p style='color:#aaa'>Nenhum item disponível.</p>";
  }

  filtrados.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML = `
      <div class="item-header">
        <img src="${item.imagem}" class="item-icon">
        <div>
          <h2>${item.nome}</h2>
          <span class="raridade ${item.raridade.toLowerCase()}">${item.raridade}</span>
        </div>
      </div>

      <div class="item-info">
        <p><b>Tipo:</b> ${item.tipo}</p>
        <p><b>Level:</b> Lv. ${item.level}</p>
        <p><b>Mob:</b> ${item.mob}</p>
        <p><b>Drop:</b> ${item.drop}</p>
      </div>

      <p class="item-desc">${item.descricao}</p>

      <button class="equipar-btn">Equipar</button>
    `;

    container.appendChild(card);
  });
}
