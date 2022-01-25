const botonModal = document.querySelector("#contacto");
const botonCerrarModal = document.querySelector("#modal-close");
const modal = document.querySelector("#modal");
botonModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("mostrar-modal");
});
botonCerrarModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("mostrar-modal");
});



const boton = document.querySelector("#icon-menu");
boton.addEventListener("click", (e)=>{
    document.getElementById("move-content").classList.toggle("move-container-all");
    document.getElementById("show-menu").classList.toggle("show-menu");
});