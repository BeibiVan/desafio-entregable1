let usuarioNumero = prompt('Ingrese un numero');
let entero = parseInt(usuarioNumero);
if(usuarioNumero === ""){
    alert('Algo salio mal');
}else if (entero > 1000){
    alert('Es mayor')
} else if (entero < 1000){
    alert('El numero es menor que 1000')
}
else {
    alert('El valor ingresado no corresponde a un número');
}
let saludoUsuario = prompt('Ingrese un saludo')
if(saludoUsuario == 'hola' || saludoUsuario == 'Hola' || saludoUsuario == 'HOLA'){
    console.log('Hola Como estas?')
}else{
    console.log('Esta vacio o no es un saludo')
}
let ingresarNumero = prompt("Ingresar un numero");
if (ingresarNumero >= 10 && ingresarNumero <= 50) {
alert ("El numero ingresado es correcto")
}

