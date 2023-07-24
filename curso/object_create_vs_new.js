function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Juliana', 'ju@email.com')
console.log(novoUser.exibirInfos())

function Admin(role) {
    //Usando User
    User.call(this, 'Andreia', 'Andreia@email.com' )
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser2 = new Admin('admin')
console.log(novoUser2.exibirInfos())
console.log(novoUser2.role)

const user3 = {
    exibirInfos: function (nome){
        return nome
    }
}

const novoUser3 = Object.create(user3)
console.log(novoUser3.exibirInfos('Vinicius'))
//user3 é protótipo para novoUser3? // true
console.log(user3.isPrototypeOf(novoUser3))


const user4 = {
    //constructor quando se usa um objeto literal
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function (nome){
        //com init se usa o this, para o nome não ficar fora de contexto
        return this.nome
    }
}

const novoUser4 = Object.create(user4)
novoUser4.init('André', 'andre@email.com')
console.log(novoUser4.exibirInfos())
