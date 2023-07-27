import User from "./User.js"

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

}

const novoAdmin = new Admin('Francisco', 'francisco@email.com', '2021-12-02')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoAdmin))