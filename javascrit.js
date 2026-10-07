console.log("MICHI LUZ cargado correctamente");

function cambiarPrecio(select, idPrecio) {

    let precio = parseInt(select.value);

    document.getElementById(idPrecio).innerHTML =
        "$" + precio.toLocaleString("es-CO");

}