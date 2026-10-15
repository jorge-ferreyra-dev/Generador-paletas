# Generador de Paletas Interactivo

## Descripción del proyecto

Colorfly Studio es una agencia de branding que necesita una herramienta sencilla para generar paletas de colores de manera rápida e interactiva.

Este proyecto consiste en el desarrollo de una aplicación web que permite a los usuarios explorar una amplia variedad de colores para utilizarlos en el diseño de interfaces web.

La herramienta permite generar paletas aleatorias de 6, 8 o 9 colores, visualizar sus códigos en formatos HEX y HSL y copiarlos al portapapeles para utilizarlos en otros proyectos.

## Tecnologías utilizadas

- HTML5: Se utilizó para construir la estructura semántica de la aplicación web, organizando sus diferentes secciones y elementos.

- CSS3: Se utilizó para diseñar la interfaz, aplicar colores, organizar los elementos mediante Flexbox y Grid, y agregar efectos visuales que mejoran la experiencia del usuario.

- JavaScript: Se utilizó para implementar la lógica interactiva de la aplicación, generar colores aleatorios, convertirlos de HEX a HSL y actualizar dinámicamente el DOM mediante eventos. También permite copiar los códigos de colores al portapapeles.

## Funcionalidades 

- Selección de cantidad de colores: permite elegir entre paletas de 6, 8 o 9 colores.

- Generación aleatoria: al presionar el botón "Generar paleta", se crean nuevos colores aleatorios.

- Visualización de colores: cada tarjeta muestra el color generado junto con sus códigos HEX y HSL.

- Copiar al portapapeles: permite copiar el código HEX o HSL haciendo clic sobre él, según las necesidades del usuario.

- Microfeedback: muestra mensajes de confirmación al generar una nueva paleta o copiar un código.

- Actualización dinámica: permite generar nuevas paletas sin necesidad de recargar la página.

- Guardado y eliminación de paletas: las mismas quedan almacenadas en el localStorage, permaneciendo disponibles al recargar la página en el mismo navegador.

## Instrucciones de uso

### Ejecución local

1. Descargar o clonar el repositorio de GitHub.
2. Descomprimir el proyecto si se descargó como ZIP.
3. Abrir `index.html` en un navegador web.
4. Seleccionar la cantidad de colores.
5. Hacer clic en **Generar paleta**.
6. Visualizar los códigos HEX y HSL.
7. Hacer clic en un código para copiarlo.
8. Hacer clic en **Guardar paleta**.
9. Visualizar las paletas guardadas.
10.Hacer clic en **Eliminar** para borrar la paleta guardada.

### Versión en línea

El proyecto se encuentra disponible en : https://jorge-ferreyra-dev.github.io/Generador-paletas/.

## Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó ChatGPT (OpenAI) como herramienta de apoyo y aprendizaje.

La inteligencia artificial cumplió principalmente el rol de tutor y programador senior, proporcionando explicaciones, sugerencias y orientación durante la implementación.

Principales consultas realizadas

1. Estructura HTML y estilos CSS

Se realizaron consultas sobre HTML semántico, organización de secciones, Flexbox, CSS Grid y accesibilidad mediante :focus-visible.

2. Generación de colores aleatorios

Se solicitó orientación para comprender y aplicar Math.random(), Math.floor(), los ciclos for y la construcción de códigos de colores hexadecimales.

3. Manipulación del DOM

Se consultó cómo crear elementos dinámicamente mediante JavaScript, utilizar createElement(), appendChild() y responder a eventos del usuario.

4. Conversión de colores

Se utilizó IA para comprender la conversión de colores HEX a HSL y su implementación mediante funciones de JavaScript.

5. Revisión y mejoras

Se realizaron consultas para revisar el código, mejorar la organización de las funciones, incorporar mensajes de confirmación y utilizar la API del portapapeles.

6.Guardado de paletas

Se utilizo la IA para implementar la utilización de localStorage y la eliminación de elementos mediante eventos y manipulación del DOM.

## Reflexión sobre el uso de IA

Durante el desarrollo del Generador de Paletas Interactivo, utilicé ChatGPT como herramienta de apoyo y aprendizaje.

La metodología de trabajo consistió en desarrollar el código de manera progresiva, compartir los avances y recibir explicaciones, correcciones y sugerencias de mejora.

La inteligencia artificial me permitió comprender mejor conceptos de HTML, CSS y JavaScript, identificar errores y mejorar la organización del código.

Considero que su utilización fue beneficiosa porque me permitió aprender durante el proceso, analizar las sugerencias recibidas y aplicarlas en el desarrollo de la aplicación.

Para consultar los prompts utilizados, sus resultados y las capturas de evidencia, ver la [Documentación del uso de IA](DOCUMENTACION-IA.md).