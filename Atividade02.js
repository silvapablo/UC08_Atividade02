let data = Date.now();
let idade = 19
let palestrantes = ["Pablo", "Derek"]
let participantes = ["Jessica", "Davi", "Analu"]

let data = prompt("Digite a data: ");
if (data < hoje){
    console.log("Data Inválida");
} else {
    let idade = prompt("Qual idade do Participante? ");
    if (idade < 18) {
        console.log("Cadastro Não Permitido");
    } else {
        console.log("Cadastro Realizado");
        console.log(participantes + palestrantes);
    }
}

if (participantes.length < 100) {
    let numeroParticipantes = prompt("Deseja Cadastar? ");
} else {
    console.log("Cadastro Não Será Permitido por ter Excedido o Limite");
}