# FileBoxBsz

Este código realiza varias funciones relacionadas con la gestión de archivos y el almacenamiento local de enlaces relacionados con esos archivos. Aquí está una descripción de lo que hace cada parte del código:

![image](https://github.com/AvastrOficial/Archivador-BSZ/assets/91764815/d83a1ab8-42df-4369-b73d-5d2c731de4f4)


# Definición de variables:

files: es una matriz que almacena los archivos seleccionados por el usuario.
cachedLinks: es una matriz que almacena los enlaces guardados en el almacenamiento local del navegador.
Función displayCachedLinks():

![image](https://github.com/AvastrOficial/Archivador-BSZ/assets/91764815/fe1a5f7b-a2f0-4f48-8359-2171eab243a0)


Recupera los enlaces guardados del almacenamiento local y los muestra en un contenedor en el documento HTML.
Utiliza un bucle forEach para iterar sobre cada enlace guardado y construir el contenido HTML que muestra la fecha, nombre y tamaño del archivo, así como el enlace en sí.
Función saveLinksToCache(link, file):

Agrega un nuevo enlace y sus metadatos al arreglo cachedLinks.
Guarda el arreglo cachedLinks en el almacenamiento local como un objeto JSON.
Llama a la función displayCachedLinks() para actualizar la visualización de los enlaces guardados.
Función clearCache():

![image](https://github.com/AvastrOficial/Archivador-BSZ/assets/91764815/21c7dce4-7649-4b17-ba11-492f53d81080)


Elimina todos los enlaces guardados del almacenamiento local y vacía el arreglo cachedLinks.
Llama a la función displayCachedLinks() para actualizar la visualización de los enlaces guardados.
Función subirArchivos():

Crea un objeto FormData para enviar archivos al servidor.
Realiza una solicitud POST al servidor usando la API Fetch para subir los archivos.
Si la carga es exitosa, muestra el enlace generado por el servidor en el documento HTML y guarda el enlace en el almacenamiento local usando la función saveLinksToCache().
Evento change en el input de archivos:

Actualiza la matriz files con los archivos seleccionados por el usuario cuando cambia el contenido del input de archivos.
Función toggleMenu():

![image](https://github.com/AvastrOficial/Archivador-BSZ/assets/91764815/a7e0e75f-43eb-424f-bdc4-fc0a468ce195)


Muestra u oculta un menú desplegable al hacer clic en algún elemento que dispare este evento. En este caso, el menú debe tener la clase .menu.
La clase .show-menu se añade o se elimina para mostrar u ocultar el menú respectivamente.
En resumen, este código maneja la carga de archivos, el almacenamiento de enlaces relacionados en el almacenamiento local del navegador, y muestra esos enlaces en el documento HTML. También proporciona la funcionalidad para mostrar u ocultar un menú desplegable.

# utilizanndo un esta pagina para poder agregar archivos temporales
https://file.io
## Utiliza la pagina funcional a qui :
https://fileboxbsz.foroactivo.com
