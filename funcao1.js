function imprimeSoma(a, b){
    console.log(a+b)
}
  
imprimeSoma(1, 2)

//Armazenando uma função em uma variável
const imprimeSubtraçao = function (a, b){
    console.log(a - b)
}

imprimeSubtraçao(4, 3)

//Armazenando uma função arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(10, 4))

//retorno implicito em uma arrow
//*serve apenas para função de uma linha
const subtracao = (a, b) => a - b

console.log(subtracao(3, 6))

//com apenas 1 único parametro, não é necessário os parenteses envolvendo-os
const imprime2 = a => console.log(a)
imprime2('Legal!!!')