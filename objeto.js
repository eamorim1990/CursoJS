//{} --> para criar um objeto
//Pode-se criar um objeto vazio e atribuir os atributos posteriormente
const prod1 = {}
prod1.nome = "Eron"
prod1.preco = 11.90
prod1['Altura'] = 1.88

console.log(prod1)

//usar [:] para atribuir valor ao atributo
const prod2 = {
    nome : 'Camisa Polo',
    preco : 22.90,
    obj : {
        blabla : 'blabla',
        preco : 22.80
    }
}

console.log(prod2.nome)

console.log(prod2.obj.preco)