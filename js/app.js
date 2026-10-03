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
        const tarjetaColor = document.createElement('div');
        tarjetaColor.textContent = color;
        tarjetaColor.style.backgroundColor = color;
        contenedorColores.appendChild(tarjetaColor);
    }
});
