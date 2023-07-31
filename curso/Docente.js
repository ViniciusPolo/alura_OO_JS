import User from "./User.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Curso de ${estudante} aprovada no curso de ${curso}`
    }

}

// const novoDocente = new Docente('Alexandre', 'xand@email.com', '2021-12-02')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// const teste = novoDocente.aprovaEstudante('Murilo', 'JS')
// console.log(teste)

// console.log(User.prototype.isPrototypeOf(novoDocente))