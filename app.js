// Exibe uma mensagem de boas-vindas
alert ('Boas vindas ao nosso site!')


// Declaração de variáveis com os valores fornecidos
let nome = 'Lua';
let idade ='25';
let numeroDeVendas = 50;
let SaldoDisponivel = 1000;

// Exibe um alerta de erro
        alert('Erro! Preencha todos os campos');

    // Declaração da variável mensagemDeErro e exibição do alerta
    let mensagemErro ='Erro! Preencha todos os campos';
        alert (mensagemErro);
// Pergunta o nome do usuário e armazena na variável nome
nome = prompt ('Qual é o seu nome?');

// Pergunta a idade do usuário e armazena na variável idade
idade = prompt ('Quantos anos você tem ?');
idade = parseInt(idade) ; // Converte a idade para um número inteiro

// Verifica se o usuário tem 18 anos ou mais

if(idade >= 18 ){

        alert('Pode tirar a Habiliação!');

}

