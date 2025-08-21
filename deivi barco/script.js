// ============================
// DATOS INICIALES
// ============================
const academicHistory = [
"Tecnología en Sistemas de Información y Software - Universidad USC (2021 - Presente)",
"Curso de Desarrollo Web - Platzi"


];

const workHistory = [
  "Soporte técnico en empresa ABC (2023 - 2024)",
  "Desarrollador freelance de páginas web"
];

const skills = [
  "HTML y CSS - Avanzado",
  "JavaScript - Intermedio",
  "Inglés - Intermedio (B1)",
  "Español - Nativo"
];

// ============================
// FUNCIÓN PARA RENDERIZAR LISTAS
// ============================
function renderList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = ''; // Limpiar contenido previo
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// ============================
// FUNCIONES PARA AGREGAR DATOS DINÁMICAMENTE
// ============================
function addItemToList(listName, listArray, listId) {
  const newItem = prompt(`Agrega un nuevo elemento a ${listName}:`);
  if (newItem && newItem.trim() !== "") {
    listArray.push(newItem.trim());
    renderList(listId, listArray);
  } else {
    alert("Entrada no válida.");
  }
}



// ============================
// BOTONES DINÁMICOS
// ============================
function createAddButton(sectionId, buttonText, listArray, listId) {
  const section = document.getElementById(sectionId);
  const btn = document.createElement("button");
  btn.textContent = buttonText;
  btn.style.marginTop = "10px";
  btn.style.padding = "10px 16px";
  btn.style.border = "none";
  btn.style.backgroundColor = "#01030fff";
  btn.style.color = "white";
  btn.style.borderRadius = "20px";
  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    addItemToList(sectionId, listArray, listId);
  });

  section.appendChild(btn);
}

// ============================
// INICIALIZACIÓN
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar listas
  renderList("academic-history", academicHistory);
  renderList("work-history", workHistory);
  renderList("skills-list", skills);

  // Agregar botones a cada sección
  createAddButton("academic-history", "Agregar estudio", academicHistory, "academic-history");
  createAddButton("work-history", "Agregar experiencia", workHistory, "work-history");
  createAddButton("skills-list", "Agregar habilidad", skills, "skills-list");
});

