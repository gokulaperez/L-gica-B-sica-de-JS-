console.log(document.querySelector(".Proximo")); 

//TIPOS DE DADOS
//1 -> Strings = Texto sempre entre "", numeros não precisa
//2 -> Number = Numeros
//3 -> Array = grupo de elementos



let botaoProximo = document.querySelector(".Proximo")
let botaoAnterior = document.querySelector(".Anterior")
let listaImagens = document.querySelectorAll("img")

let contador = 0

console.log(listaImagens)



botaoProximo.onclick = function passarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")
    
if(contador < 2){
    contador = contador + 1
}else{
    contador = 0
}
    
    listaImagens[contador].classList.add("ativo")
}

botaoAnterior.onclick = function voltarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")
    
    if(contador > 0){
        contador = contador - 1
    } else{
        contador = 2
    }
    
    listaImagens[contador].classList.add("ativo")
}