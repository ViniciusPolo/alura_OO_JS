export default class User { //como expot default poderá ser usado em outro lugar, para isso precisa criar um package.json com npm init -y
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}
const novoUser = new User('Augusto', 'augusto@email.com', '2021-01-02')
console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser))