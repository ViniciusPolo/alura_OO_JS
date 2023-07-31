export default class User { //como expot default poderá ser usado em outro lugar, para isso precisa criar um package.json com npm init -y
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if (typeof novoNome !== "string" || novoNome !== "") throw new Error('Nome deve ser String e não pode ser vazio')
        this.#nome = novoNome
    }

    set email(novoEmail){
        this.#email = novoEmail
    }

    set nascimento(novoNascimento){
        this.#nascimento - novoNascimento
    }

    set role(novoRole){
        this.#role = novoRole
    }

    set ativo(novoAtivo){
        this.#ativo = novoAtivo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.role}`
    }

    //com os getter acima essa function aqui não precia foi usado para teste antes
    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role || 'estudante',
            ativo: this.#ativo
        })
    }

    //desse modo uma função de dentro da classe esta usando e exibirInfos não é privada, mas não há o risco de alterar o objeto pai
    exibirInfos2(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}, ${objUser.role}`
    }
}
// const novoUser = new User('Augusto', 'augusto@email.com', '2021-01-02')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))