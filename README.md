# bsale-challenge-front
Este proyecto es una demo realizada usando vanilla JavaScript, muestra un filtrado de productos por categoría, busqueda de productos por nombre y los resultados se aprecian mediante una paginación

## Explicación
**Estructura:** En la raíz del proyecto hay dos carpetas `CSS` que contiene los estilos css de la pagina, `JS` que contiene todos los archivos Javascript relacionandos con el funcionamiento del programa y el archivo principal `index.html` que contiene el etiquetado y maquetación de la página.

Dentro de la carpeta `JS`, tenemos el archivo principal `index.js` que una vez cargado el "DOM" llama a la Api trayendo la información de los productos y categorías; en este archivo también se configuran los "listeners" para que esten atentos a cualquier click del usuario y realizar las acciones que correspondan, como por ejemplo navegar mediante la paginación.

- En la subcarpeta `api` contiene los archivos que hacen la llamada a la Api y te entrega la data de los productos y las categorias existentes.

- En la subcarpeta `components` tenemos los componentes visuales que se mostrarán dinamicamente en la página de acuerdo a la data obtenida.

- En la subcarpeta `helpers` están las funciones adicionales, pero aquí sólo hay una función que cambia los parametros de la url de acuerdo a la interacción del usuario con la paginación.

![front structure](https://user-images.githubusercontent.com/35734972/166967164-2950840d-8403-40db-823c-64201d55b77e.jpg)

## Run the app locally
Recomiendo usar el editor de código Visual Studio Code, ejecutando la aplicación en modo "live server". Click derecho dentro del archivo index.html y luego dar en la opcion "Open with live server".
Si usas otro editor, puedes usar alguna libreria "live server" de tu preferencia.

Si deseas cambiar de entorno; debes cambiar el valor de la constante `apiUrl` dentro del archivo index.js (por defecto apunta a producción)

- Backend en tu local host: `const apiUrl = "http://localhost:5000"` (tener en cuenta el número de puerto en que se esta ejecutando el backend)
- Backend en producción: `const apiUrl = "https://marv-bsale.herokuapp.com"`

## Producción
A continuación se muestra la demo [Aquí](https://marv-bsale.netlify.app/).
