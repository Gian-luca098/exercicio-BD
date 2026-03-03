function mudaTitulo(){
    const h1 = document.getElementById('titulo')
    const imput = document.getElementById('texto')
    const valor = imput.value
    h1.innerHTML = valor
    input.value=''
}
function mudaCor(e){
    console.log(e.target)
    e.target.style.bordercolor = 'green'
    e.target.style.color = 'red'
}

function adicao() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = num1 + num2;
    alert(resultado );
}

function subtracao() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = num1 - num2;
    alert(resultado);
}

function multplicacao() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = num1 * num2;
    alert(resultado);
}

function divisao() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
        let resultado = num1 / num2;
        alert(resultado);   
}

