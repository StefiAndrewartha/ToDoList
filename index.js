let inputDiv = document.querySelector(".input");
let boton = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");
boton.addEventListener("click", () => {
    chequearInput();
});

let chequearInput = () => {
    if(inputDiv.value != ""){
        let nuevaTarea = new item(inputDiv.value);
        inputDiv.value = "";
    }
}

class item {
    constructor(valor){
        this.crearDiv(valor);
    }
    crearDiv(valor){
        this.div = document.createElement("div"); // variable local
        this.div.classList.add("item")
        this.inputItem = document.createElement("input");
        this.inputItem.value = valor;
        this.inputItem.disabled = true;
        this.inputItem.classList.add("item-input");
        this.botonEditar = document.createElement("button");
        this.botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
        this.botonEditar.classList.add("boton-editar");
        this.botonRemover = document.createElement("button");
        this.botonRemover.innerHTML = "<i class='fa-solid fa-trash'></i>";
        this.botonRemover.classList.add("boton-remover");
        this.botonEditar.addEventListener("click", () => {
            if (this.inputItem.disabled){
                this.inputItem.disabled = false;
                this.botonEditar.innerHTML = ""
                this.botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>"

            }else {
                this.inputItem.disabled = true
                this.botonEditar.innerHTML = ""
                this.botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
            }
        })
        this.botonRemover.addEventListener("click", () => {
            container.removeChild(this.div);
        })

        this.div.appendChild(this.inputItem);
        this.div.appendChild(this.botonEditar);
        this.div.appendChild(this.botonRemover);
        container.appendChild(this.div);

    }
}




