let contatos = require('./contatos')

function editar(id,editar){
    editar.id = contatos.length -1
    contatos[id]=(editar)

}

module.exports = editar