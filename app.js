const prompt = require('prompt-sync')()

let contatos = require('./contatos')
const listar = require('./listar')
const adicionar = require('./adicionar')
const editar = require('./editar')
const excluir = require('./excluir')

function menu(){
    console.log('\n1 Listar \n2 Adicionar \n3 Atualizar \n4 Excluir \n0 Sair')
    let opcao = prompt('Digite um numero: ')
    switch(opcao){
        case '1':
            if(contatos.length == 0){
                console.log('não a contatos cadastrados')
            }else{
                listar()
            }
            menu()
            break;
        case '2': 
            let nome = prompt('Digite um nome: ')
            let email = prompt('Digite um e-mail: ')
            let numero = prompt('Digite um Número: ')
            adicionar({nome: nome, email: email,numero: numero})
            console.log('Adicionado com Sucesso')
            menu()
            break;
        case '3':
              if(contatos.length == 0){
                console.log('não a contatos cadastrados')
              }else{
                listar()
                let opcao = prompt('Digite o id: ')
                const id = contatos.findIndex(contato => contato.id == opcao)
                if(id == -1){
                    console.log('id não encontrado')
                }else{
                    let novoNome= prompt('Digite um novo nome: ')
                    let novoEmail= prompt('Digite um novo e-mail: ')
                    let novoNumero= prompt('Digite um novo Número: ')
                    editar(id, {nome: novoNome, email: novoEmail, numero: novoNumero})
                    console.log('Adicionado com Sucesso')
                }
                menu()
              }
            break;
        case '4':
            if(contatos.length == 0){
                console.log('não a contatos cadastrados')
            }else{
                listar()
                let opcao = prompt('Digite o id: ')
                let id = contatos.findIndex(contato => contato.id == opcao)
                if(id == -1){
                    console.log('id não encontrado')
                }else{
                    excluir(id)
                    console.log('Excluido com Sucesso')
                }
                menu()
            }
            break;
        case '0':     
            break;
        default:
            throw new Error('Número Invalido')
            break;
    }
}

menu()