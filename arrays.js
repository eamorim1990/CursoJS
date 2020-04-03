let valor = [1.0, 2.3, 4.5, 3.5]
console.log(valor[0], valor[3])

console.log(valor[4])

valor[4] = 3

console.log(valor[4])

valor[10] = 12

console.log(valor)

//nr total de elementos
console.log(valor.length)

//adicionando elementos ao array
valor.push({id: 3}, false, null, 'teste')

console.log(valor)

//remove último elemento do array
valor.pop()
console.log(valor)

//deleta um elemento do array pelo seu indice.
//o conteúdo da posição é removido, mas a posição permanece
delete valor[2]
console.log(valor)

//devolve algum valor a posição que ficou
valor[2] = 22
console.log(valor)

let matriz = [2,3][3,4]
console.log(matriz[0][0])