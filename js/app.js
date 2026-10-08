    //Variables y constantes
const selectorPaleta = document.getElementById('tamanioPaleta');
const botonGenerar = document.getElementById('btnGenerarPaleta');
const contenedorColores = document.getElementById('contenedorColores');
const mensajeFeedback = document.getElementById('mensajeFeedback');


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

    //Eventos    
botonGenerar.addEventListener('click', function() {
    let tamanio = Number(selectorPaleta.value);
    contenedorColores.textContent = "";

    for(let i = 0; i < tamanio ; i++){
        const color = generarColorHex();
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

        //Generar el elemento span para mostrar el codigo del color
        const codigoHex = document.createElement('span');
        codigoHex.textContent = `HEX: ${color}`;
        infoColor.appendChild(codigoHex);

        const codigoHsl = document.createElement('span');
        codigoHsl.textContent = `HSL: ${colorHsl}`;
        infoColor.appendChild(codigoHsl);

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
