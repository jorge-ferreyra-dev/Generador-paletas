    //Variables y constantes
const selectorPaleta = document.getElementById('tamanioPaleta');
const botonGenerar = document.getElementById('btnGenerarPaleta');
const contenedorColores = document.getElementById('contenedorColores');
const mensajeFeedback = document.getElementById('mensajeFeedback');
const botonGuardar = document.getElementById('btnGuardarPaleta');
let paletaActual = [];
const contenedorPaletasGuardadas = document.getElementById('contenedorPaletasGuardadas');

    //Funciones
function generarColorHex() {
        const caracteresHex = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++) {
            let indiceAleatorio = Math.floor(Math.random() * caracteresHex.length);
            let caracter = caracteresHex[indiceAleatorio];
            color += caracter;
        }
        return color;
};

function convertirHexAHsl(color) {

    // Convertir HEX a RGB y normalizar los valores entre 0 y 1
    let r = parseInt(color.slice(1, 3), 16) / 255;
    let g = parseInt(color.slice(3, 5), 16) / 255;
    let b = parseInt(color.slice(5), 16) / 255;

    // Buscar el canal RGB mayor y menor
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calcular luminosidad y diferencia entre canales
    let l = (max + min) / 2;
    const delta = max - min;

    let h;
    let s;

    // Si no hay diferencia entre canales, el color es gris
    if (delta === 0) {
        h = 0;
        s = 0;

    } else {

        // Calcular saturación según la luminosidad
        if (l <= 0.5) {
            s = delta / (max + min);
        } else {
            s = delta / (2 - max - min);
        }

        // Calcular el tono según el canal dominante
        if (max === r) {
            h = (g - b) / delta;
        } else if (max === g) {
            h = 2 + (b - r) / delta;
        } else {
            h = 4 + (r - g) / delta;
        }
    }
    h = h * 60;
    if (h < 0) {
    h = h + 360;
    }
    // Redondear H y convertir S y L a porcentaje
    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function copiarColor(color) {
    navigator.clipboard.writeText(color);
    mensajeFeedback.textContent = `¡Color ${color} copiado!`;
    setTimeout(function(){
        mensajeFeedback.textContent = '';
    }, 2000);
}

function mostrarPaletasGuardadas() {
    const paletasGuardadas = JSON.parse(localStorage.getItem('paletasGuardadas')) || [];

    contenedorPaletasGuardadas.textContent = "";

    paletasGuardadas.forEach(function(paleta, indice) {

        // Crear tarjeta
        const tarjetaPaleta = document.createElement('div');
        tarjetaPaleta.classList.add('tarjeta-paleta-guardada');

        // Crear encabezado
        const encabezado = document.createElement('div');
        encabezado.classList.add('encabezado-paleta');

        const titulo = document.createElement('h3');
        titulo.textContent = `Paleta ${indice + 1}`;

        // Crear botón eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.type = 'button';
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.textContent = 'Eliminar';

        // Evento para eliminar la paleta
        botonEliminar.addEventListener('click', function() {

            paletasGuardadas.splice(indice, 1);

            localStorage.setItem(
                'paletasGuardadas',
                JSON.stringify(paletasGuardadas)
            );

            mostrarPaletasGuardadas();

            mensajeFeedback.textContent = "¡Paleta eliminada!";

            setTimeout(function() {
                mensajeFeedback.textContent = "";
            }, 2000);
        });

        encabezado.appendChild(titulo);
        encabezado.appendChild(botonEliminar);

        // Crear contenedor de colores
        const contenedorMuestras = document.createElement('div');
        contenedorMuestras.classList.add('muestras-guardadas');

        // Recorrer los colores
        paleta.forEach(function(color) {

            const muestraGuardada = document.createElement('div');
            muestraGuardada.classList.add('color-guardado');
            muestraGuardada.style.backgroundColor = color;
            muestraGuardada.title = color;

            contenedorMuestras.appendChild(muestraGuardada);
        });

        // Incorporar elementos a la tarjeta
        tarjetaPaleta.appendChild(encabezado);
        tarjetaPaleta.appendChild(contenedorMuestras);

        // Mostrar tarjeta
        contenedorPaletasGuardadas.appendChild(tarjetaPaleta);
    });
}

    //Eventos    
botonGenerar.addEventListener('click', function() {
    let tamanio = Number(selectorPaleta.value);
    contenedorColores.textContent = "";
    paletaActual = [];

    for(let i = 0; i < tamanio ; i++){
        const color = generarColorHex();
        paletaActual.push(color);
        const colorHsl = convertirHexAHsl(color);
        
        //Generar la tarjeta y agregarla al contenedor
        const tarjetaColor = document.createElement('div');
        tarjetaColor.classList.add('color');
        contenedorColores.appendChild(tarjetaColor);

        //Agregar un div hijo dentro de cada tarjeta
        const muestraColor = document.createElement('div');
        muestraColor.classList.add('muestra-color');
        muestraColor.style.backgroundColor = color;
        tarjetaColor.appendChild(muestraColor);

        //Generar un contenedor para los códigos de los colores
        const infoColor = document.createElement('div');
        infoColor.classList.add('info-color');
        tarjetaColor.appendChild(infoColor);

        //Generar el elemento button para mostrar el codigo del color
        const codigoHex = document.createElement('button');
        codigoHex.textContent = `HEX: ${color}`;
        infoColor.appendChild(codigoHex);
        codigoHex.type = 'button';

        const codigoHsl = document.createElement('button');
        codigoHsl.textContent = `HSL: ${colorHsl}`;
        infoColor.appendChild(codigoHsl);
        codigoHsl.type = 'button';

        //Evento para copiar el Hex y HSL al portapapeles
        codigoHex.addEventListener('click', function() {
            copiarColor(color);
        });

        codigoHsl.addEventListener('click', function() {
            copiarColor(colorHsl);
        });
    }

    //Generar mensaje microfeedback
        mensajeFeedback.textContent = '¡Nueva paleta generada!';
        setTimeout(function() {
            mensajeFeedback.textContent = '';
        }, 2000);
});

botonGuardar.addEventListener('click', function() {

    if(paletaActual.length === 0) {
        mensajeFeedback.textContent = "Primero debes generar una paleta";
        setTimeout(function() {
            mensajeFeedback.textContent = "";
        }, 2000);
        return;
    }

    let paletasGuardadas = JSON.parse(localStorage.getItem('paletasGuardadas')) || [];
    paletasGuardadas.push([...paletaActual]);
    localStorage.setItem('paletasGuardadas', JSON.stringify(paletasGuardadas));
    mensajeFeedback.textContent = "¡Paleta guardada correctamente!";
    setTimeout(function() {
            mensajeFeedback.textContent = "";
        }, 2000);
    mostrarPaletasGuardadas();    
});

mostrarPaletasGuardadas();