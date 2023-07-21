const user = {
    nome: "Vinicius",
    email: "vinicius@email.com",
    nascimento: "1987/04/11",
    role: "admin",
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email)
    }
}

user.exibirInfos()

const exibir = user.exibirInfos
exibir()

const exibirobjetoGlobal = function (){
    console.log(this)
}
exibirobjetoGlobal()

const exibirNome = exibirobjetoGlobal.bind(user)
//bind prende a funcão exibirObjetoGlobal ao user
exibirNome()

function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibeInfos = function(){
        console.log(this.nome, this.email)
    }
}

function exibeInfos() {
    console.log(this.nome, this.email)
}
//call
const userCall = {
    nome: 'Mariana',
    email: 'm@m.com'
}

exibeInfos.call(userCall)
//newObject
const newUser = new User('Antonio', 'a@email.com')

const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
}

newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

//apply
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}
const userApply = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
        fn.apply(userApply, [this.nome, this.email])
    }
}
userApply.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com