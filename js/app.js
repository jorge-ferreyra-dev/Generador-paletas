    //Variables y constantes
const selectorPaleta = document.getElementById('tamanioPaleta');
const botonGenerar = document.getElementById('btnGenerarPaleta');
const contenedorColores = document.getElementById('contenedorColores');


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

    //Eventos    
botonGenerar.addEventListener('click', function() {
    let tamanio = Number(selectorPaleta.value);
    contenedorColores.textContent = "";

    for(let i = 0; i < tamanio ; i++){
        const color = generarColorHex();

        //Generar la tarjeta y agregarla al contenedor
        const tarjetaColor = document.createElement('div');
        tarjetaColor.classList.add('color');
        contenedorColores.appendChild(tarjetaColor);

        //Agregar un div hijo dentro de cada tarjeta
        const muestraColor = document.createElement('div');
        muestraColor.classList.add('muestra-color');
        muestraColor.style.backgroundColor = color;
        tarjetaColor.appendChild(muestraColor);

        //Generar el elemento span para mostrar el codigo del color
        const codigoColor = document.createElement('span');
        codigoColor.textContent = color;
        tarjetaColor.appendChild(codigoColor);
    }
});
