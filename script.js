const items = [
  {
    slot: "ring1",
    name: "Amethyst Stargazer Ring",
    type: "Anel",
    rarity: "Incomum",
    level: 55,
    description:
      "+6 Fortitude\n\nA gema deste anel caiu do céu noturno gerações atrás, descoberta incrustada na pedra de um santuário remoto. Um brilho silencioso responde ao chakra.",
    image: "anel-amethyst.png"
  },

  {
    slot: "weapon",
    name: "Espada Quebrada",
    type: "Arma",
    rarity: "Comum",
    level: 3,
    description: "Uma espada antiga, gasta pelo tempo.",
    image: "placeholder.png"
  }
];

const params = new URLSearchParams(window.location.search);
const slotAtual = params.get("slot");
const list = document.getElementById("items-list");

const filtrados = items.filter(item => item.slot === slotAtual);

if (filtrados.length === 0) {
  list.innerHTML = "<div class='items-empty'>Nenhum item disponível para este slot</div>";
}

filtrados.forEach(item => {
  list.innerHTML += `
    <div class="item-row">
      <div><img src="${item.image}" class="item-icon"></div>
      <div>${item.name}</div>
      <div>${item.type}</div>
      <div class="rarity">${item.rarity}</div>
      <div>Lv ${item.level}</div>
      <div class="desc">${item.description.replace(/\n/g,"<br>")}</div>
    </div>
  `;
});
