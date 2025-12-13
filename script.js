const itemData = {
  arma: { name: "Arma", type: "Arma", rarity: "Raro" },
  chapeu: { name: "Chapéu", type: "Cabeça", rarity: "Comum" },
  calca: { name: "Calça", type: "Pernas", rarity: "Incomum" },
  veste: { name: "Veste", type: "Peitoral", rarity: "Raro" },
  camisa: { name: "Camisa", type: "Torso", rarity: "Comum" },
  mascara: { name: "Máscara", type: "Rosto", rarity: "Épico" },
  sapato: { name: "Sapato", type: "Pés", rarity: "Incomum" },
  acessorio: { name: "Acessório", type: "Extra", rarity: "Lendário" },
  anel1: { name: "Anel 1", type: "Anel", rarity: "Raro" },
  anel2: { name: "Anel 2", type: "Anel", rarity: "Raro" }
};

function openItem(el) {
  const id = el.dataset.item;
  localStorage.setItem("currentItem", id);
  window.location.href = "item.html";
}

function loadItem() {
  const id = localStorage.getItem("currentItem");
  if (!id) return;

  const item = itemData[id];
  document.getElementById("itemName").innerText = item.name;
  document.getElementById("itemType").innerText = "Tipo: " + item.type;

  const rarityEl = document.getElementById("itemRarity");
  rarityEl.innerText = "Raridade: " + item.rarity;
  rarityEl.className = "item-rarity " + item.rarity.toLowerCase();

  updateEquipButton(id);
}

function toggleEquip() {
  const id = localStorage.getItem("currentItem");
  let equipped = JSON.parse(localStorage.getItem("equipped")) || {};

  equipped[id] = !equipped[id];
  localStorage.setItem("equipped", JSON.stringify(equipped));

  updateEquipButton(id);
}

function updateEquipButton(id) {
  const equipped = JSON.parse(localStorage.getItem("equipped")) || {};
  const btn = document.getElementById("equipBtn");

  btn.innerText = equipped[id] ? "Desequipar" : "Equipar";
}

document.addEventListener("DOMContentLoaded", loadItem);
