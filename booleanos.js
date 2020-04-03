let     isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Como não há tipagem da variavel,
//é necessário negar (com operador [!] para saber se é ou ñ booleano)
isAtivo = 1
console.log(!!isAtivo)

let testelogico = !isAtivo
console.log(testelogico)

console.log('Os verdadeiro são...')
console.log(`1 é... ${!!1}
-1 é... ${!!-1}
' ' é... ${!!' '}
texto é... ${!!'texto'}
array[] é... ${!![]}
objeto{} é... ${!!{}}
Infinity é... ${!!Infinity}
atribuição isAtivo = true é... ${isAtivo = true}`)

console.log(`Os falsos...
0 é... ${!!0}
'' é... ${!!''}
null é.. ${!!null}
Nan é... ${!!NaN}
undefined é... ${!!undefined}
atribuição isAtivo = false é... ${isAtivo = false}

Para finalizar....
('' || null || 0 || ' ') é ${!!('' || null || 0 || ' ')}`)
 
let nome = ''
console.log(nome || 'Desconhecido')
