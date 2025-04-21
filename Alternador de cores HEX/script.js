let background = document.body
let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')

// Função para converter RGB para HEX

function rgbtoHex(r, g, b){ 
    let vermelho = parseInt(r).toString(16).padStart(2, "0");
    let verde = parseInt(g).toString(16).padStart(2, "0");
    let azul = parseInt(b).toString(16).padStart(2, "0");

    return `#${vermelho}${verde}${azul}`
}

// Função para atualizar a cor de fundo

function updateBackground(){
    let r = red.value
    let g = green.value
    let b = blue.value
    
    let hexColor = rgbtoHex(r,g,b);
    background.style.backgroundColor = hexColor;
}

// Adiciona eventos aos sliders
red.addEventListener('input', updateBackground);
green.addEventListener('input', updateBackground);
blue.addEventListener('input', updateBackground);