// ===============================
// BANCO DE ITENS
// ===============================
const ITEMS = [
  {
    id: "amethyst_stargazer_ring",
    nome: "Amethyst Stargazer Ring",
    tipo: "Anel",
    slots: ["anel1", "anel2"],
    raridade: "Raro",
    level: 55,
    status: "+7 Fortitude",
    mob: "Samurai",
    drop: "Below 1%",
    descricao:
      "The gem set into this ring is said to have fallen from the night sky generations ago, discovered embedded within the stone of a remote mountain shrine. Unlike ordinary crystals, it does not shine with reflected light, but with a quiet glow that responds to chakra.",
    imagem: "assets/items/rings/amethyst-stargazer-ring.png",
    equipadoEm: null
  }
];

// ===============================
// LER SLOT DA URL
// ===============================
const params = new URLSearchParams(window.location.search);
const SLOT_ATUAL = params.get("slot");

// ===============================
// RENDER ITENS
// ===============================
function renderItens() {
  const container = document.getElementById("lista-itens");
  if (!container) return;

  container.innerHTML = "";

  const itensFiltrados = ITEMS.filter(item =>
    item.slots.includes(SLOT_ATUAL)
  );

  if (itensFiltrados.length === 0) {
    container.innerHTML = "<p class='vazio'>Nenhum item disponível.</p>";
    return;
  }

  itensFiltrados.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-card";

    div.innerHTML = `
      <img src="${item.imagem}">
      <div class="item-info">
        <h3>${item.nome}</h3>
        <p><b>Tipo:</b> ${item.tipo}</p>
        <p><b>Raridade:</b> ${item.raridade}</p>
        <p><b>Level:</b> Lv. ${item.level}</p>
        <p><b>Status:</b> ${item.status}</p>
        <p><b>Mob:</b> ${item.mob}</p>
        <p><b>Drop:</b> ${item.drop}</p>
        <p class="desc">${item.descricao}</p>
        <button onclick="equipar('${item.id}')">
          ${item.equipadoEm === SLOT_ATUAL ? "Desequipar" : "Equipar"}
        </button>
      </div>
    `;

    container.appendChild(div);
  });
}

// ===============================
// EQUIPAR / DESEQUIPAR
// ===============================
function equipar(id) {
  const item = ITEMS.find(i => i.id === id);
  if (!item) return;

  if (item.equipadoEm === SLOT_ATUAL) {
    item.equipadoEm = null;
  } else {
    item.equipadoEm = SLOT_ATUAL;
  }

  renderItens();
}

renderItens();
