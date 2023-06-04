let boton = document.querySelector(".boton");
let texto = document.querySelector(".texto");

boton.addEventListener("click", () => {
    let css = [...texto.classList];
    if (css.includes("purple")){
        texto.classList.remove("purple");
        texto.classList.add("orange");
    } else {
        texto.classList.remove("orange");
        texto.classList.add("purple");
    }
}
);