let contatos = require('./contatos')

function excluir(id){
    contatos.splice(id, 1)
}

module.exports = excluir