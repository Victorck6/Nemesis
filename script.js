const params = new URLSearchParams(window.location.search);
const slot = params.get("slot");

const items = [
  {
    slots: ["ring1", "ring2"],
    icon: "assets/amethyst-ring.png",
    name: "Amethyst Stargazer Ring",
    type: "Anel",
    rarity: "Raro",
    level: 55,
    mob: "Samurai",
    drop: "Below 1%"
  }
];

const list = document.getElementById("items-list");

items.forEach(item => {
  if (!item.slots.includes(slot)) return;

  const row = document.createElement("div");
  row.className = "item-row";

  row.innerHTML = `
    <img src="${item.icon}">
    <span>${item.name}</span>
    <span>${item.type}</span>
    <span class="rarity">${item.rarity}</span>
    <span>Lv ${item.level}</span>
    <span>${item.mob}</span>
    <span>${item.drop}</span>
  `;

  list.appendChild(row);
});
