function probarValidarNombre() {
    console.assert (
        validarNombre('') === "Este campo debe tener al menos un caracter",
            "validarNombre no validó que este campo tenga al menos un caracter",
    );
    console.assert (
        validarNombre('11111111111111111111111111111111111111111111111111') === "Este campo debe tener menos de cincuenta caracteres",
            "validarNombre no validó que este campo tenga menos de 50 caracteres",
    );
    
    console.assert (
        validarNombre('hola') === "",
        "validarNombre no validó que el dato ingresado es correcto",
    )
}

function probarValidarEdad() {
    console.assert(
        validarEdad(-1) === "Por favor, ingrese un número válido",
        "validarEdad no validó que el número sea válido",

    )
    console.assert(
        validarEdad(20) === "",
        "validarEdad no validó que el número es válido",
    )
}

probarValidarNombre();
probarValidarEdad();