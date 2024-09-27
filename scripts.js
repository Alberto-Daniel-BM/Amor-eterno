// Toggle del menú
const menuBtn = document.getElementById("menu-btn");
const menuOpciones = document.getElementById("menu-opciones");
const masOpcion = document.getElementById("mas-opcion");
const enlacesYoutube = document.getElementById("enlaces-youtube");

menuBtn.addEventListener("click", function() {
    menuOpciones.style.display = menuOpciones.style.display === "block" ? "none" : "block";
});

masOpcion.addEventListener("click", function(e) {
    e.preventDefault();
    enlacesYoutube.style.display = enlacesYoutube.style.display === "block" ? "none" : "block";
});
