<h1>Amigo Secreto</h1>
<h2>Resumen del Proyecto 🚀</h2>
<p>Este proyecto es una aplicación web simple para organizar un juego de Amigo Secreto. La aplicación permite a los usuarios agregar nombres a una lista y luego sortear un nombre al azar para determinar quién es el "amigo secreto". El objetivo es proporcionar una herramienta fácil y divertida para facilitar este popular intercambio de regalos.</p>
<h2>Archivos del Proyecto 📂</h2>
<p>El proyecto consta de tres archivos principales: index.html, style.css y app.js.</p>
<h3>index.html</h3>
<p>Este archivo es la estructura principal de la aplicación. Define la interfaz de usuario con elementos como un título, un campo de entrada para los nombres, botones para agregar y sortear, y listas para mostrar los nombres agregados y el resultado del sorteo.</p>
<ul>
    <li><strong>Encabezado</strong> (<header>): Contiene el título principal de la aplicación, "Amigo Secreto", y una imagen representativa.</li>
    <li><strong>Sección de Entrada</strong> (<section>): Muestra el formulario para ingresar nombres. Incluye un campo de texto (<input>), un botón para "Añadir" y dos listas (<ul>) para los nombres agregados (#listaAmigos) y el resultado (#resultado).</li>
    <li><strong>Botón de Sorteo</strong>: Un botón con la etiqueta "Sortear amigo" que activa la función de sorteo.</li>
</ul>
<h3>style.css</h3>
<p>Este archivo se encarga de dar estilo a la aplicación. Utiliza variables CSS para definir una paleta de colores y aplica estilos para el diseño, las fuentes, los botones y las listas.</p>
<ul>
    <li><strong>Variables</strong>: Define colores para el fondo, texto, y botones.</li>
    <li><strong>Diseño</strong>: Usa Flexbox para centrar el contenido y organizar los elementos de manera vertical.</li>
    <li><strong>Estilos de componentes</strong>: Aplica estilos específicos a los títulos, el campo de entrada y los botones, incluyendo efectos de hover para una mejor experiencia de usuario.</li>
    <li><strong>Fuentes</strong>: Importa las fuentes Inter y Merriweather de Google Fonts para un diseño atractivo.</li>
</ul>
<h3>app.js</h3>
<p>Este archivo contiene la lógica principal de la aplicación. Maneja las funciones de agregar nombres, sortear y mostrar los resultados.</p>
<ul>
    <li>amigos (array): Almacena los nombres de los amigos que se agregan.</li>
    <li>agregarAmigo(amigo):
        <ul>
            <li>Verifica que el nombre ingresado no esté vacío.</li>
            <li>Si el campo tiene texto, agrega el nombre al array amigos.</li>
            <li>Limpia el campo de entrada.</li>
            <li>Llama a la función llenarLista() para actualizar la lista en la página.</li>
        </ul>
    </li>
    <li>llenarLista():
        <ul>
            <li>Recorre el array amigos.</li>
            <li>Crea un nuevo elemento de lista (<li>) para cada nombre.</li>
            <li>Agrega cada nuevo elemento a la lista (#listaAmigos) en el HTML.</li>
        </ul>
    </li>
    <li>sortearAmigo():
        <ul>
            <li>Verifica si hay al menos dos nombres en la lista. Si no, muestra una alerta.</li>
            <li>Genera un número aleatorio usando Math.random() para seleccionar un nombre del array amigos.</li>
            <li>Muestra el nombre del amigo secreto sorteado en la lista #resultado.</li>
            <li>Borra el contenido del array amigos para que se pueda iniciar un nuevo sorteo.</li>
        </ul>
    </li>
</ul>
<h2>Cómo Usar ⚙️</h2>
<ol>
    <li>Abre el archivo index.html en tu navegador web.</li>
    <li>Escribe el nombre de un amigo en el campo de texto.</li>
    <li>Haz clic en el botón "Añadir" para agregarlo a la lista.</li>
    <li>Repite los pasos 2 y 3 para todos los participantes.</li>
    <li>Una vez que tengas al menos dos nombres, haz clic en el botón "Sortear amigo".</li>
    <li>La aplicación mostrará el nombre del amigo secreto sorteado.</li>
</ol>
