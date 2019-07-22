// let nome = "velson"; 
// let contador = 0;


// while(contador<5){
//     console.log(nome);
//     contador ++;
// }
let nome1 = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");


let filmes = [
    { nome: "Rei Leão", Classificaçao: 6 },
    { nome: "Vingadores Ultimato", Classificaçao: 14 },
    { nome: "KillBill", Classificaçao: 16 },
    { nome: "Madagascar", Classificaçao: 6 }
]


for (let filme of filmes) {
    if (idade >= filme.Classificaçao) {
        alert(nome1 + " pode assistir " + filme.nome);
    } else {
        alert(nome1 + "  nao pode assitir " + filme.nome);
    }
}
