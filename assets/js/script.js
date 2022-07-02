//Desafío parte1

function imgClick() {
    let imagen1 = document.getElementById("imagen1").style.border;
    
    if (imagen1 === "") {
    document.getElementById("imagen1").style.border = "2px solid red";
    } else {
        document.getElementById("imagen1").style.border = ""
    }
}

//Desafío parte2

function calcular() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let parrafo = document.getElementById("txt_resultado");

    input1 = parseInt(input1)
    input2 = parseInt(input2)
    input3 = parseInt(input3)

    let resultado = parseInt(input1) + parseInt(input2) + parseInt(input3);

    if (resultado <= 10 && resultado >=1) {
        parrafo.innerHTML = 'Llevas ' + (resultado) + ' stickers';
    } else if (resultado >=11)
        parrafo.innerHTML = 'Llevas demasiados stickers';
    
    if (input1 === 0 && input2 === 0 && input3 === 0) {
        parrafo.innerHTML = 'Debes seleccionar al menos un sticker';
    } 
}

//Desafío parte3
function verificarpass() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let pass3 = document.getElementById("pass3").value;
   
    let pass_resultado = document.getElementById("pass_resultado");
    
    let combinacion = pass1 + pass2 + pass3; //concatenacion

    if (combinacion === '911') {
        pass_resultado.innerHTML = 'Password 1 correcto';
    } else if (combinacion === '714') {
        pass_resultado.innerHTML = 'Password 2 correcto';
    } else {
        pass_resultado.innerHTML = 'Password incorrecto';
    }

}