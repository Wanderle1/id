let contatos = require('./contatos')

function editar(id,editar){
    contatos[id]=(editar)

}

module.exports = editar
