const funcs = []

for(var i =0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

//problema clássico do JS... mesmo atribuindo [i] para cada índice do vetor [funcs]
//se printar agora ainda assim irá aparecer o valor 10 em qlq índece de [funcs]
funcs[2]()
funcs[8]()