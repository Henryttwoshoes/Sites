let nota = document.getElementById("inota");
let lista = document.getElementById("lista");
let res = document.getElementById("res");
let media = document.getElementById("media")
let situation = document.getElementById("situation")
let placeholder = document.getElementById("array")
let valores = [];
let limite = 5;
let contador = 0
function adicionar() {
    if (nota.value > 0 && nota.value <= 10 && contador < limite){
    var item = document.createElement('option')
    item.text = `Valor ${nota.value} adicionado`
    contador++
    valores.push(Number(nota.value))
    lista.appendChild(item)
    } 
    if (nota.value <= 0 || nota.value > 10) {
        window.alert('Valor inválido. Digite um valor entre 0 e 10.')
    }
    if (contador > limite){
        window.alert('Limite de valores atingido. Certifique-se de inserir no máximo 5 notas para efetuar o cálculo.')
    }
}

function limpar(){
    valores = [];
    lista.innerHTML = ''
    contador = 0
    mediaCalculada = 0
    soma = 0
    media.innerText = ''
    situation.innerText = ''
}

function calcular(){
    let soma = 0;
    let tot = valores.length;

    //Soma dos valores do array
    for (let pos in valores){
        soma += valores[pos];
    }
    
    //Calcula a média
    
    let mediaCalculada = soma / tot;
    
    //Exibe o resultado
    
    media.innerText = `A média das notas expostas é ${mediaCalculada.toFixed(1)}`;
    if (mediaCalculada < 6){
        situation.innerHTML = `<p id="situation" style="color: darkred;">Você está abaixo da média</p>`
    } else {
    situation.innerHTML = `<p id="situation" style="color: green;">Você está acima da média!</p>`
    }
    
}