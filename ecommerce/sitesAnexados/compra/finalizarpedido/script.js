const imagem = document.getElementById("imgLivro1")
const precos = document.getElementById("preco")
const titulos = document.getElementById("titulo")
const precos1 = document.getElementById("preco1")
const precos2 = document.getElementById("preco2")
const precos3 = document.getElementById("preco3")

var itemEscolhido = localStorage.getItem("livro")
var index = undefined

const imagensLivro = ["../../../imgs/livros/livro1.jpg", "../../../imgs/livros/livro2.jfif", "../../../imgs/livros/livro3.png", "../../../imgs/livros/livro4.jpg"]
const livro = ["Biblioteca da Meia Noite", "Tudo é Rio","É Assim que Acaba", "Os Sete Maridos de Evelyn Hugo"]
const valor = [69.90, 59.90, 49.90, 33.90]


for(var i = 0; i < livro.length; i++){
    if(livro[i] == itemEscolhido){
        index = i
        carregar()
    }
}

function carregar(){
    imagem.src = imagensLivro[index]
    precos.innerHTML = "R$" + valor[index].toFixed(2)
    precos1.innerHTML = "R$" + valor[index].toFixed(2)
    precos2.innerHTML = "R$" + (valor[index] / 2).toFixed(2) + " sem juros"
    precos3.innerHTML = "R$" + (valor[index] / 3).toFixed(2) + " sem juros"
    titulos.innerHTML = livro[index]
}
