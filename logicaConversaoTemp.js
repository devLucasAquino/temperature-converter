var entradaCelsius = document.getElementById('inputCelsius');
var outputLabel = document.getElementById('outputLabel')

// entradaCelsius.addEventListener('keyup', );


function converter() {


    var valor;
    var Fahrenheint;

    valor = entradaCelsius.value;
    
    if(valor.length !== 0){

        Fahrenheint = parseFloat(valor) * 1.8 + 32;
        outputLabel.innerText = `A temperatura ${valor}ºC equivale a ${Fahrenheint}ºF!`

    }else{
        outputLabel.innerText = null;
    }
    
}