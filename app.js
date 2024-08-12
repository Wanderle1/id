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
            let tele
            let telefones=[]
            let nome = prompt('Digite um nome: ')
            let email = prompt('Digite um e-mail: ')
            for(let y=0; y < contatos.length; y++){
                if(contatos[y].email == email){
                    throw new Error('e-mail já cadastrado')
                }
            }
            while((tele = prompt('Digite seu número de telefone(Deixe em branco se quiser sair): '))){
                telefones.push(tele)
            }
            adicionar({nome: nome, email: email, numero: telefones})
            console.log('Cadastrado com Sucesso')
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
                    let re = prompt('Tem certeza que deseja editar esse contato? (Sim/Nao): ').toLowerCase()
                    switch(re){
                        case 'sim':
                            let perg =prompt('Digite o que você quer editar (nome/email/numero/todos): ').toLowerCase()
                            switch(perg){
                                case 'nome':
                                    let novoNome= prompt('Digite um novo nome: ')
                                    contatos[id].nome = (novoNome)
                                    console.log('Editado com Sucesso')
                                    menu()
                                    break;
                                case 'email':
                                    let novoEmail= prompt('Digite um novo e-mail: ')
                                    contatos[id].email = (novoEmail)
                                    console.log('Editado com Sucesso')
                                    menu()
                                    break;
                                case 'numero':
                                    let novoNumero
                                    let numeros = []
                                    while(novoNumero= prompt('Digite um novo Número (Deixe em branco se quiser sair): ')){
                                        numeros.push(novoNumero)
                                    }
                                    contatos[id].numero = (numeros)
                                     console.log('Editado com Sucesso')
                                     menu()
                                    break;
                                case 'todos':
                                    let novonNumero
                                    let num = []
                                    let novonNome= prompt('Digite um novo nome: ')
                                    let novonEmail= prompt('Digite um novo e-mail: ')
                                    while(novonNumero= prompt('Digite um novo Número (Deixe em branco se quiser sair): ')){
                                        num.push(novonNumero)
                                    }
                                     editar(id, {id: contatos[id].id, nome: novonNome, email: novonEmail, numero: num})
                                    console.log('Editado com Sucesso')
                                    menu()
                                    break;
                                default:
                                    throw new Error('Opção Invalida')
                            }
                            menu()
                            break;
                        case 'nao':
                            console.log('Retornando ao menu')
                            break;
                        default:
                            throw new Error('Opção Invalida')

                    }
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
                    let exc = prompt('Deseja realmente excluir? (Sim/Nao): ').toLowerCase()
                    switch(exc){
                        case 'sim':
                            excluir(id)
                            console.log('Excluido com Sucesso')
                            break;
                        case 'não':
                            console.log('Retornando ao menu')
                            break;
                        default:
                            throw new Error('Opção Invalida')     
                    }
                    
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
