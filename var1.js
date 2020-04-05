//Qndo uma variável é criada fora da um função,
//mesmo que dentro de um bloco {}, ela é global
{
    {
        {
            {
                var sera = "Será??"
            }
        }
    }
}

console.log(sera)

//quando a variável é criada dentro de uma função, 
//ela é acessível única e exclusivamente na função
function teste(){
    var sera = "Será2??"
    console.log(sera)
}

teste()

//aqui chamamos a variável [sera] global criada dentro dos vários {} acima
console.log(sera)