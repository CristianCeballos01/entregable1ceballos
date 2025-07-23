// PROFE SI COME PALTA PONGALE AZUCAR

const MIN_USUARIO_LENGTH = 4;
const MIN_PASSWORD_LENGTH = 6;

let usuariosRegistrados = []; 

let usuarioActual = {};

// Función 1: Entrada de Datos
function solicitarDatosUsuario() {
    console.log("--- Iniciando proceso de registro ---");

    let nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario (mínimo " + MIN_USUARIO_LENGTH + " caracteres):");
    let contrasena = prompt("Ingresa tu contraseña (mínimo " + MIN_PASSWORD_LENGTH + " caracteres):");
    let email = prompt("Ingresa tu dirección de correo electrónico:");

    usuarioActual = {
        nombre: nombreUsuario,
        pass: contrasena,
        correo: email
    };

    return usuarioActual;
}

function validarDatosUsuario(datosUsuario) {
    console.log("Validando datos del usuario: " + datosUsuario.nombre);
    let esValido = true;

    // Validar nombre de usuario
    if (datosUsuario.nombre === null || datosUsuario.nombre.trim().length < MIN_USUARIO_LENGTH) {
        alert("Error: El nombre de usuario debe tener al menos " + MIN_USUARIO_LENGTH + " caracteres.");
        console.warn("Validación fallida: Nombre de usuario inválido.");
        esValido = false;
    }

    // Validar contraseña
    if (esValido && (datosUsuario.pass === null || datosUsuario.pass.trim().length < MIN_PASSWORD_LENGTH)) {
        alert("Error: La contraseña debe tener al menos " + MIN_PASSWORD_LENGTH + " caracteres.");
        console.warn("Validación fallida: Contraseña inválida.");
        esValido = false;
    }

    // Validar email
    if (esValido && (datosUsuario.correo === null || !datosUsuario.correo.includes("@") || !datosUsuario.correo.includes("."))) {
        alert("Error: El correo electrónico no parece válido (debe contener '@' y '.').");
        console.warn("Validación fallida: Email inválido.");
        esValido = false;
    }

    return esValido;
}

function mostrarResultadoRegistro(esExitoso, datosUsuario) {
    if (esExitoso) {
        alert("¡Felicitaciones, " + datosUsuario.nombre + "! Tu cuenta ha sido registrada con éxito.");
        console.log("Registro exitoso para el usuario: " + datosUsuario.nombre);
        console.log("Contraseña (oculta por seguridad): [*****]");
        console.log("Email: " + datosUsuario.correo);

        usuariosRegistrados.push(datosUsuario);
        console.log("Usuarios registrados hasta ahora: " + usuariosRegistrados.length);
    } else {
        alert("No se pudo completar el registro. Por favor, verifica los datos ingresados.");
        console.error("Registro fallido.");
    }
}

function iniciarSimuladorRegistro() {
    console.log("Iniciando simulador de registro...");

    let datosIngresados = solicitarDatosUsuario();

    let registroValido = validarDatosUsuario(datosIngresados);

    mostrarResultadoRegistro(registroValido, datosIngresados);

    let registrarOtro = confirm("¿Deseas registrar otro usuario?");
    while (registrarOtro) {
        console.log("\n--- Registrando un nuevo usuario ---");
        datosIngresados = solicitarDatosUsuario();
        registroValido = validarDatosUsuario(datosIngresados);
        mostrarResultadoRegistro(registroValido, datosIngresados);
        registrarOtro = confirm("¿Deseas registrar otro usuario?");
    }

    console.log("Simulador de registro finalizado. Total de usuarios simulados: " + usuariosRegistrados.length);
}
iniciarSimuladorRegistro();