import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Sebastião', 'tiao@email.com', '1965-12-10')
console.log(novoUser.exibirInfos())

//novoUser.nome = 'Marcia'
//novoUser.#nome = 'Marcia' --- aqui ja deu erro, pois o atributo nome está marcado com cerquilha, então, PRIVADO
console.log(novoUser.exibirInfos())
//Isso que queremos evitar em user colocar cerquilha # e torna privado
const novoAdmin = new User('Joaquim', 'joca@email.com', '1975-12-10', 'admin', false)
console.log(novoAdmin.exibirInfos())
//usando o get Nome de User
console.log(novoAdmin.nome)
console.log(novoAdmin.ativo)
const maisUmAdmin = new User('Antonio', 'tonho@email.com', '1975-12-10', 'admin', false)
console.log(maisUmAdmin.nome)
console.log(maisUmAdmin.ativo)
maisUmAdmin.nome = 'Manoel'
maisUmAdmin.email = 'mane@email.com'
console.log(maisUmAdmin.nome)
console.log(maisUmAdmin.exibirInfos())
maisUmAdmin.nome = "Felipe"
console.log(maisUmAdmin.nome)
console.log(maisUmAdmin.exibirInfos())
maisUmAdmin.nome = ""
console.log(maisUmAdmin.nome)
