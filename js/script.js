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