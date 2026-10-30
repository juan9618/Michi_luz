console.log("MICHI LUZ: JavaScript cargado correctamente");

// ==========================================
// CAMBIAR PRECIO DE LOS PRODUCTOS
// ==========================================

function cambiarPrecio(select, idPrecio) {
    const precio = Number(select.value);
    const elementoPrecio = document.getElementById(idPrecio);

    if (!elementoPrecio || !Number.isFinite(precio)) {
        return;
    }

    elementoPrecio.textContent = "$" + precio.toLocaleString("es-CO");
}

// ==========================================
// HISTORIAS DE LAS MASCOTAS
// ==========================================

const historiasMascotas = {

    tobias: {
        nombre: "Tobías Leonardo",
        aroma: "Chocolate",
        intencion: "Amor, compañía, protección y bienestar.",
        porQue: "El chocolate tiene un aroma cálido y reconfortante. Representa la compañía, la protección y la sensación de bienestar que Tobías transmitió a su familia.",
        historia: "Tobías fue encontrado el 20 de mayo en una estación de TransMilenio. Estaba muy débil y hambriento, aunque por su apariencia parecía un perro fuerte o intimidante. En realidad, era dócil y amoroso. Llegó a un hogar donde recibió cuidados y también acompañó a una persona que necesitaba recuperar sus fuerzas. Su presencia dio motivos para levantarse, seguir adelante y recuperar la confianza. Posteriormente fue entrenado como perro de asistencia médica.",
        frase: "El compañero que llegó para ser rescatado y terminó regalando fuerza y esperanza."
    },

    amelia: {
        nombre: "Amelia",
        aroma: "Lavanda",
        intencion: "Paz, esperanza y sanación.",
        porQue: "La lavanda tiene un aroma suave y reconfortante. Representa la calma y la paciencia necesarias para sanar y volver a confiar.",
        historia: "Cuando apenas era una bebé, Amelia sufrió maltrato, fue abandonada y necesitó ayuda para sobrevivir. Fue rescatada y, rodeada de cuidados y amor, encontró una nueva oportunidad. Hoy es una perrita dulce y amorosa que demuestra que el dolor no tiene por qué definir una vida y que la ternura puede volver a florecer.",
        frase: "Intentaron apagar su luz, pero el amor le enseñó a florecer."
    },

    tomasito: {
        nombre: "Tomasito",
        aroma: "Maracuyá",
        intencion: "Esperanza, resiliencia y amor por la vida.",
        porQue: "El maracuyá tiene notas frutales, dulces y vibrantes. Su carácter representa la energía y la esperanza de encontrar una nueva oportunidad después de momentos difíciles.",
        historia: "Tomasito llegó herido, vulnerable y sin fuerzas después de atravesar momentos difíciles. A pesar de lo vivido, conservó su dulzura y sus ganas de recibir cariño. Su historia recuerda que un gesto de amor puede transformar una vida y que siempre existe la posibilidad de volver a confiar.",
        frase: "Un corazón que, a pesar de todo, nunca dejó de necesitar amor."
    },

    guadalupe: {
        nombre: "Guadalupe",
        aroma: "Vainilla",
        intencion: "Dulzura, amor propio y gratitud.",
        porQue: "La vainilla tiene un aroma suave, cálido y reconfortante. Evoca la sensación de hogar, seguridad y cariño que Guadalupe encontró después de su rescate.",
        historia: "Guadalupe fue rescatada siendo adulta, después de vivir en una terraza con problemas graves en su piel y desnutrición. Su recuperación fue un camino largo, pero nunca perdió su dulzura. Con el tiempo se convirtió en una guardiana de su nueva familia. Hoy es una dulce abuelita que sigue ofreciendo ternura y protección.",
        frase: "El verdadero amor no envejece: permanece, acompaña y sigue cuidando."
    },

    dante: {
        nombre: "Dante",
        aroma: "Sándalo",
        intencion: "Confianza, fortaleza y seguridad.",
        porQue: "El sándalo tiene un aroma profundo, cálido y envolvente. Representa la fortaleza, la calma y la seguridad que Dante necesitó para aprender a confiar nuevamente.",
        historia: "Dante llegó buscando refugio y detrás de su desconfianza había heridas emocionales difíciles de sanar. Su proceso para volver a confiar ha requerido paciencia, respeto y amor. A pesar de sus miedos, conservó su dulzura y un instinto protector especial hacia los niños y los gatos.",
        frase: "No necesitaba aprender a amar; necesitaba descubrir que ya no tenía que vivir con miedo."
    },

    moises: {
        nombre: "Moisés de Jesús",
        aroma: "Naranja dulce",
        intencion: "Alegría, fortaleza y amor por la vida.",
        porQue: "La naranja dulce tiene un aroma cítrico, alegre y lleno de vitalidad. Representa la energía y la alegría que Moisés transmite después de superar un comienzo difícil.",
        historia: "Cuando apenas era un bebé, Moisés fue rescatado de una caneca de basura. Poco después tuvo que enfrentarse al moquillo, una enfermedad que puso a prueba su pequeño cuerpo. Logró superar el tratamiento y hoy es un perro lleno de energía, juguetón y amoroso con su familia.",
        frase: "Llegó al mundo contra todo pronóstico y hoy lo llena de alegría con su enorme corazón."
    },

    gatubela: {
        nombre: "Gatubela",
        aroma: "Jazmín",
        intencion: "Protección, amor incondicional y conexión profunda.",
        porQue: "El jazmín tiene un aroma dulce, delicado y envolvente. Representa el vínculo especial, la ternura y la compañía protectora que Gatubela ofrece a su familia.",
        historia: "Gatubela fue abandonada frente a una puerta cuando era apenas una bebé. Sus pequeños maullidos le dieron la oportunidad de encontrar un hogar. Creció siendo curiosa, traviesa y amorosa. Con el tiempo se convirtió en una compañera inseparable y protectora de su familia, especialmente de un niño con quien comparte un vínculo muy especial.",
        frase: "Llegó pidiendo un refugio y terminó convirtiéndose en el ángel guardián de su hogar."
    },

    juanita: {
        nombre: "Juanita",
        aroma: "Flor de cerezo",
        intencion: "Consuelo, esperanza y renovación del amor.",
        porQue: "La flor de cerezo representa la belleza de los nuevos comienzos y la esperanza. Su aroma floral y delicado acompaña la historia de Juanita, que encontró una nueva oportunidad para amar.",
        historia: "Juanita fue abandonada cuando estaba a punto de dar a luz y perdió a sus pequeños. Después de aquella experiencia quedó desconfiada y protectora. Más adelante llegó a su vida una gatita bebé que también había sido abandonada. Juanita la acogió y la cuidó con toda su ternura. Ambas encontraron una nueva familia y construyeron un vínculo inseparable.",
        frase: "Cuando la vida le arrebató sus primeros sueños, el amor le regaló una nueva razón para florecer."
    },

    marcelita: {
        nombre: "Marcelita",
        aroma: "Galleta",
        intencion: "Ternura, protección, gratitud y amor incondicional.",
        porQue: "El aroma dulce y cálido de una galleta recién horneada recuerda la tranquilidad del hogar, la protección y los pequeños momentos de felicidad.",
        historia: "Marcelita fue abandonada cuando apenas llevaba poco tiempo de nacida. Era tan pequeña que necesitaba cuidados constantes. Su camino se cruzó con el de Juanita, que había perdido a sus bebés. Las unimos y Juanita la recibió como suya. Marcelita encontró una madre y Juanita tuvo una nueva oportunidad para cuidar y entregar amor. Juntas sanaron sus corazones y construyeron una familia inseparable.",
        frase: "Llegó necesitando una mamá y terminó siendo el milagro que sanó dos corazones."
    },

    renesme: {
        nombre: "Renesme",
        aroma: "Frutos rojos",
        intencion: "Amor, confianza, pertenencia y gratitud.",
        porQue: "Los frutos rojos tienen un aroma dulce, frutal y envolvente. Representan la sensibilidad, la dulzura y la intensidad de los vínculos que permanecen.",
        historia: "Renesme vivió durante años en la calle, donde recibía alimento y cariño gracias a una persona que nunca la olvidó. Cuando esa persona se mudó, Renesme se quedó atrás y lloró junto a la puerta durante dos días. Su llamado no fue ignorado: fueron a buscarla y le dieron la oportunidad de comenzar una nueva vida en un hogar donde finalmente pudo sentirse segura.",
        frase: "Lloró para no perderte y encontró en tu nuevo hogar el lugar al que siempre quiso pertenecer."
    },

    jaila: {
        nombre: "Jaila Luli",
        aroma: "Lirio blanco y almizcle blanco",
        intencion: "Amor eterno, recuerdo y gratitud.",
        porQue: "El lirio blanco evoca ternura, respeto y homenaje. El almizcle blanco aporta una sensación suave y delicada. Juntos representan un recuerdo lleno de amor y gratitud.",
        historia: "Jaila Luli fue una pequeña perrita rescatada de la calle durante una noche fría. Creció junto a un niño enfermo de la familia y desarrolló con él una conexión muy especial. Percibía cuando él se encontraba muy enfermo y permanecía a su lado, brindándole compañía y cariño. Su vida terminó demasiado pronto, pero dejó una huella enorme en quienes la amaron.",
        frase: "Hay seres que dejan este mundo, pero nunca dejan nuestro corazón."
    },

    puerquito: {
        nombre: "Puerquito",
        aroma: "Sándalo y vainilla",
        intencion: "Memoria, compañía y amor que permanece.",
        porQue: "El sándalo representa la profundidad y la permanencia del recuerdo. La vainilla aporta calidez y ternura, evocando el cariño de un hogar. Juntos rinden homenaje al vínculo que Puerquito logró construir.",
        historia: "Puerquito era un gato mayor que vivía en la calle. Al principio estaba sucio y era desconfiado. Conseguir que confiara tomó aproximadamente un año, pero con paciencia pudo conocer el cariño y la tranquilidad de un hogar. Aunque el tiempo juntos fue corto, su presencia fue profundamente significativa.",
        frase: "A veces, el tiempo compartido es corto, pero el amor que deja es para siempre."
    }

};

// ==========================================
// MOSTRAR LA HISTORIA SELECCIONADA
// ==========================================

function mostrarHistoria(idMascota) {

    const mascota = historiasMascotas[idMascota];

    if (!mascota) {
        console.error("No se encontró la historia:", idMascota);
        return;
    }

    const nombre = document.getElementById("detalle-nombre");
    const aroma = document.getElementById("detalle-aroma");
    const intencion = document.getElementById("detalle-intencion");
    const porQue = document.getElementById("detalle-por-que");
    const historia = document.getElementById("detalle-historia");
    const frase = document.getElementById("detalle-frase");
    const detalle = document.getElementById("detalle-coleccion");

    if (!nombre || !aroma || !intencion || !porQue || !historia || !frase || !detalle) {
        console.error("Faltan elementos de la sección de historias en el HTML.");
        return;
    }

    nombre.textContent = mascota.nombre;
    aroma.textContent = "Aroma: " + mascota.aroma;
    intencion.textContent = mascota.intencion;
    porQue.textContent = mascota.porQue;
    historia.textContent = mascota.historia;
    frase.textContent = "“" + mascota.frase + "”";

    detalle.hidden = false;

    detalle.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// CERRAR LA HISTORIA
// ==========================================

function cerrarHistoria() {

    const detalle = document.getElementById("detalle-coleccion");

    if (detalle) {
        detalle.hidden = true;
    }
}

// ==========================================
// ACTIVAR LOS BOTONES DE LAS COLECCIONES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll("[data-mascota]");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const idMascota = boton.dataset.mascota;

            mostrarHistoria(idMascota);

        });

    });

    const botonCerrar = document.getElementById("cerrar-historia");

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarHistoria);
    }

});