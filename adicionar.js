let contatos = require('./contatos')

function adicionar(contato){
    contato.id = contatos.length +1
    contatos.push(contato)
}

module.exports = adicionar