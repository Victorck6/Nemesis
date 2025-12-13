const items = [
  { nome: "Anel do Poder", raridade: "Raro", level: 10 },
  { nome: "Anel Antigo", raridade: "Comum", level: 3 },
  { nome: "Anel Sombrio", raridade: "Épico", level: 25 }
];

const list = document.getElementById("itemsList");

function render(data) {
  list.innerHTML = "";
  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-row";
    div.innerHTML = `
      <span>${item.nome}</span>
      <span>${item.raridade}</span>
      <span>Lv ${item.level}</span>
    `;
    list.appendChild(div);
  });
}

render(items);

document.querySelectorAll(".items-header span").forEach(span => {
  let asc = true;
  span.addEventListener("click", () => {
    const key = span.dataset.sort;
    items.sort((a,b) => asc ? a[key] > b[key] ? 1 : -1 : a[key] < b[key] ? 1 : -1);
    asc = !asc;
    render(items);
  });
});
