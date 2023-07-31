import User from "./User.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas}`
    }

}

// const novoAdmin = new Admin('Francisco', 'francisco@email.com', '2021-12-02')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// const teste = novoAdmin.criarCurso('JS', 20)
// console.log(teste)

// console.log(User.prototype.isPrototypeOf(novoAdmin))