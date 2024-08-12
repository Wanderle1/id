let contatos = require('./contatos')

function listar(){
    contatos.forEach((contato)=>{
        console.log(`id: ${contato.id} 
nome: ${contato.nome} 
email: ${contato.email}
numeros: `)
for(let f=0; f < contato.numero.length; f++){
    console.log(`${f+1}: ${contato.numero[f]}`)
}
console.log('')
    })
}

module.exports = listar