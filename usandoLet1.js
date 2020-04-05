//se a váriavel é declarada com 'let', ele respeita o escopo
let numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ',numero)