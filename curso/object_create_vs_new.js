const user = {
    nome: "Vinicius",
    email: "vinicius@email.com",
    nascimento: "1987/04/11",
    role: "estudante",
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Angélica",
    email: "angelica@email.com",
    nascimento: "1989/17/12",
    role: "admim",
    ativo: true,
    criarCurso(){
        console.log("Curso Criado")
    }
}

//Criando protótipo
//(quem herda propriedades, de onde herda propriedades)
Object.setPrototypeOf(admin, user)

admin.criarCurso()
//admin pode usar exibir infos agora
admin.exibirInfos()

//exibe o objeto prototipo do admin, no caso user. Seré descontinuado
console.log(admin.__proto__)

//exibe o prototipo básico do JS, só funciona no console do navegador. Será descontinuado
console.log(admin.__proto__.__proto__)

//Só funciona no navegador
String.prototype



