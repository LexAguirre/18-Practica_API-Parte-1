![Logo](img/ucol-logo.jpg)

# Práctica 18: Servido para RESTFUL API

> Segunda Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

![HTTP](img/HTTP.jpg)

En las prácticas anteriores hemos abordado tópicos que nos van a ayudar a construir nuestra RESTFUL API conectada a una fuente de datos de MongoDB. Para dar paso a este nuevo proyecto será necesario comenzar desde cero, tener un proyecto nuevo, debido a que la organización de los directorios y archivos es clave para el posterior mantenimiento de nuestros servicios.

> ENTREGA: VIERNES 13 DE MAYO DEL 2022

## EXPLICACIÓN DEL PROCESO

1. Crea una carpeta llamada "practica_18"

2. Inicializa NPM con npm init -y

3. Instala los paquete express con npm i express y nodemon con npm install -g nodemon

4. Instala el paquete 'ejs' con el comando npm i express --save o npm i ejs

5. Crea un nuevo archivo server.js

6. Crea una nueva carpeta llamada "public" dentro de la carpeta "practica_15"

7. Dentro de la carpeta "public" crea un nuevo archivo style.css

8. Dentro del archivo style.css se le escribira body y dentro de este tendra un front-family : 'Roboto Condensed', sans-serif ademas se definira el color del texto como azul y en el h1 como rojo;

9. Se crea la carpeta src donde se ingresara el archivo server.js

10. Dentro de la carpeta src se creara una carpeta routes en la cual se creara el archivo person.js

11. En el archivo “person.js” escribiremos nuestra primera ruta, para el método get, en este caso enviaremos solo un mensaje

12. En el server.js se eliminara todas las rutas que teniamos anteriormente y se cololoca una ruta para que pueda ejecutar el codigo del archivo person.js.

13. Instala postman con npm i postman agent

14. Ahora se ejecuta el comando "npx nodemon server en el postman y acccede a http://localhost:3000/person

## RECURSOS

- https://www.npmjs.com/
- https://ejs.co/
