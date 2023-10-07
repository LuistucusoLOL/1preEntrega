
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
saludar(nombre, apellido);

function saludar(nombre, apellido) {
    if (nombre && apellido) {
        alert(`Hola ${nombre} ${apellido} Bienvenido :D`);
    } else {
        alert("Por favor, ingrese su nombre y apellido.");
    }
}

let saldo = 1000;
consultarSaldo(saldo);

function consultarSaldo(saldo) {
    alert(`Su saldo actual es: ${saldo} USD`);
}

let montoDeposito = parseFloat(prompt("Ingrese el monto para depositar"));
saldo = realizarDeposito(saldo, montoDeposito);

function realizarDeposito(saldo, monto) {
    if (!isNaN(monto) && monto > 0) {
        saldo += monto;
        actualizarSaldo(saldo);
        alert(`Depósito exitoso. Su nuevo saldo es: ${saldo} USD`);
    } else {
        alert("Ingrese un monto válido para el depósito.");
    }
    return saldo;
}

let montoRetiro = parseFloat(prompt("Ingrese el monto para retirar"));
saldo = realizarRetiro(saldo, montoRetiro);

function realizarRetiro(saldo, monto) {
    if (!isNaN(monto) && monto > 0 && monto <= saldo) {
        saldo -= monto;
        actualizarSaldo(saldo);
        alert(`Retiro exitoso. Su nuevo saldo es: ${saldo} USD`);
    } else {
        alert("Monto de retiro no válido. Verifique su saldo.");
    }
    return saldo;
}

function actualizarSaldo(saldo) {
    alert(`Su saldo actual es: ${saldo} USD`);
}
 


calculadoraDeInversiones();
function calculadoraDeInversiones() {
    let montoInicial = parseFloat(prompt("Bienvenido a la calculadora de inversiones , por favor ingrese el monto inicial de su inversión:"));
    let tasaInteres = parseFloat(prompt("Ahora ingrese la tasa de interés anual (sin %, solo el numero):"));
    let años = parseInt(prompt("Por ultimo ingrese la cantidad de años de la inversión:"));

    if (montoInicial > 0 && tasaInteres >= 0 && años > 0) {
        tasaInteres = tasaInteres / 100;

        let resultado = montoInicial;

        for (let i = 1; i <= años; i += 0.5) {
            resultado += resultado * tasaInteres * 0.5;
        }

        alert(`Después de ${años} años, su inversión de $${montoInicial.toFixed(2)} a una tasa de interés del ${tasaInteres * 100}% será de $${resultado.toFixed(2)}.`);
    } else {
        alert("Por favor, ingrese valores válidos para la inversión.");
    }
}









