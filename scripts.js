console.log("Conexão bem sucedida!")

const unorderedList = document.querySelector("ul")
const input = document.querySelector("#main-input")
const alertBox = document.querySelector(".notification")
const form = document.querySelector("form")
const alertBtn = document.querySelector(".close-btn")

input.addEventListener("input", () => {
    const hasNumbersRegex = /\d+/g
    input.value = input.value.replace(hasNumbersRegex, "")
})

function createList(value){
    //Criando a lista
    let list = document.createElement("li")
    //Transformando a lista em filha da ul
    unorderedList.prepend(list)
    //Criando a div
    let div = document.createElement("div")
    //Dando a classe da div
    div.classList.add("checkbox")
    //Transformando a div em filha da lista
    list.prepend(div)
    //Criando a label
    let label = document.createElement("label")
    //Adicionando o for da label
    label.setAttribute("for", "checkbox")
    //Adicionando a classe da label
    label.classList.add("check-label")
    //Transformando a label em filha da div
    div.prepend(label)
    //Criando a checkbox
    let checkboxInput = document.createElement("input")
    //Atributos do checkbox
    checkboxInput.setAttribute("type", "checkbox")
    checkboxInput.setAttribute("id", "checkbox")
    checkboxInput.setAttribute("name", "checkbox-input")
    checkboxInput.setAttribute("value", "list-box")
    //Transformando o checkbox em filho da label
    label.prepend(checkboxInput)
    //Criando o parágrafo para aparecer o valor do input
    let listText = document.createElement("p")
    //Tornando o parágrafo filho da label
    label.append(listText)
    //Passando o value da função para o listText
    listText.textContent = value
    //Criando o botão
    let btn = document.createElement("button")
    //Atributos do botão
    btn.setAttribute("type", "button")
    //Classe do botão
    btn.classList.add("remove-btn")
    //Adicionando a imagem do botão
    let img = document.createElement("img")
    img.setAttribute("src", "source/icon delete.png")
    btn.prepend(img)
    //Transformando o button em filho da div
    div.append(btn)
    input.value = ""
    btn.addEventListener("click", (e) => {
        unorderedList.removeChild(list)
        alertShow()
        })
}

function alertShow(){
    alertBox.classList.remove("hide")
    alertBox.classList.add("show-alert")
    setTimeout (() => {
        alertBox.classList.remove("show-alert")
        alertBox.classList.add("hide")
    }, "5000")
}

form.onsubmit = (event) => {
    event.preventDefault()
    createList(input.value)
    console.log(input.value)
}

alertBtn.addEventListener("click", (e) => {
    alertBox.classList.remove("show-alert")
    alertBox.classList.add("hide")
})

