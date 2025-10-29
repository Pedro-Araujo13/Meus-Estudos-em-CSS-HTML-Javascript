//String -> textos
let saudacao = "Olá, Mundo!";
console.log(saudacao); //saída: Olá, Mundo!

//Number

let idade = 20;
let pi = 3.14;
console.log(idade, pi); //Saída: 20 3.14


//Boolean -> Verdadeiro ou falso

let estaLogado = true;
let temPermissao = false;
console.log(estaLogado, temPermissao); //Saída: true false

//Null -> valor nulo (intencionalmente vazio)
let resposta = null;
console.log(resposta); //saída

//Undefined 
let nome;
console.log(nome);

//Object -> conjunto de pares: valor

let pessoa = {
    nome: "Pedro",
    idade: "18",
    estudante: "True"
};

console.log(pessoa);// Saída {nome: 'Pedro', idade: 18, estudante:true}
console.log(pessoa.nome); //Acessando uma propriedade -> Carlos

let age = 18;

if (idade <18){
    console.log("Menor de idade");
}else if (idade === 18){
    console.log("Acabou de atingir a maior idade");
}else{
    console.log("Maior de idade");
}

let dia = 5;
let nomeDia;

switch(dia){
    case 1:
        nomeDia ="Segunda-Feira";
        break;
    case 2:
        nomeDia ="Terça- Feira";
        break;
    case 3:
        nomeDia = "Quarta-Feira";
        break;
    case 4:
        nomeDia = "Quinta-Feira";
        break;
    case 5:
        nomeDia = "Sexta-Feira";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    case 7:
        nomeDia = "Domingo";
        break;
}

console.log(nomeDia);