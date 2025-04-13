let nota = document.getElementById("inota");
let lista = document.getElementById("lista");
let res = document.getElementById("res");
let media = document.getElementById("media")
let situation = document.getElementById("situation")
let placeholder = document.getElementById("array")
let valores = [];
let limite = 5;
let contador = 0;
let n1 = [];
let n2 = 0;
let tipo = document.getElementById('tipo')
let calculosem = Boolean(true)
let podecalculo = Boolean(false)
function adicionar() {
    if (nota.value > 0 && nota.value <= 10 && contador < limite){
    var item = document.createElement('option')
    
    contador++
    valores.push(Number(nota.value))
    lista.appendChild(item)
    if (contador <= 4){
        item.text = `Valor ${nota.value} adicionado a nota N1`
        n1.push(Number(nota.value))
    }
    if (contador > 4 && contador == 5){
        item.text = `Valor ${nota.value} adicionado a nota N2`
        n2 = Number(nota.value)
    }
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
    let img = document.getElementById('img');
    if (img){
        img.outerHTML = '<img src="" id="img" alt="">';
    }
}


function trocatipo(){
    let texttipo = document.getElementById('tipotext')
    if (calculosem === true){
        calculosem = false
        texttipo.innerHTML = (`<p id="tipotext">Você está efetuando cálculo de <span style="color: rgb(236, 22, 22);">média simples</span></p>`)
    }
    else {
        calculosem = true
        texttipo.innerHTML = (`<p id="tipotext">Você está efetuando cálculo de <span style="color: rgb(22, 90, 236);">média semestral</span></p>`)
    }
}

function calcular(){
    if (valores.length > 0){
        podecalculo = true
    } else {
        podecalculo = false
    }
    if (valores > 0 && calculosem === true && valores.length > 0){
    let soma1 = 0;
    //let tot1 = n1.length;
    let img = document.getElementById('img')
    //Soma dos valores do array
    for (let pos in n1){
        soma1 += Number(n1[pos]);
    }
    
    //Calcula a média
    let median1 = soma1 / n1.length
    let mediaCalculada = (median1*0.4) + (n2*0.6)
    
    //Exibe o resultado
    
    media.innerText = `A média das notas expostas é ${mediaCalculada}`;
    if (mediaCalculada < 6){
        situation.innerHTML = `<p id="situation" style="color: darkred;">Você está abaixo da média</p>`
        img.outerHTML = `<img src="https://cdn.betterttv.net/emote/5fd1610acbd462462d56cd7d/3x.webp" id="img" alt="">`
    } else {
    situation.innerHTML = `<p id="situation" style="color: green;">Você está acima da média!</p>`
    img.outerHTML = `<img src="https://cdn.frankerfacez.com/emoticon/318778/4" id="img" alt="">`
    }
} else if (calculosem === false && n1.len){
    let soma1 = 0
    //let tot1 = n1.length;
    let img = document.getElementById('img')
    //Soma dos valores do array
    for (let pos in valores){
        soma1 += Number(valores[pos]);
    }
    let mediasimples = soma1 / valores.length
    let mediaCalculada = mediasimples

    media.innerText = `A média das notas expostas é ${mediaCalculada}`;
    if (mediaCalculada < 6){
        situation.innerHTML = `<p id="situation" style="color: darkred;">Você está abaixo da média</p>`
        img.outerHTML = `<img src="https://cdn.betterttv.net/emote/5fd1610acbd462462d56cd7d/3x.webp" id="img" alt="">`
    } else {
    situation.innerHTML = `<p id="situation" style="color: green;">Você está acima da média!</p>`
    img.outerHTML = `<img src="https://cdn.frankerfacez.com/emoticon/318778/4" id="img" alt="">`
    }
    
}}
