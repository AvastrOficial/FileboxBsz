    const FILEIO_HOST = "https://file.io/?expires=1M";
        const CATBOX_HOST = "https://catbox.moe/user/api.php";
        const LITTER_HOST = "https://litterbox.catbox.moe/resources/internals/api.php";
        const HASH_FILE = "FileboxBsz"; // Reemplaza esto con tu hash de usuario real
        let files = [];
        let cachedLinks = JSON.parse(localStorage.getItem('cachedLinks')) || [];

        function displayCachedLinks() {
            const cachedLinksContainer = document.getElementById('cachedLinks');
            cachedLinksContainer.innerHTML = '<strong>Enlaces guardados:</strong><br>';

            cachedLinks.forEach(savedLink => {
                const date = new Date(savedLink.date);
                const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

                // Convertir el tamaño del archivo de bytes a megabits
                const sizeInMegabits = (savedLink.size * 8) / (1024 * 1024);

                // Calcula la fecha de expiración en 12 meses
                const expirationDate = new Date(date.getTime());
                expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Añade 1 año
                const formattedExpirationDate = `${expirationDate.toLocaleDateString()} ${expirationDate.toLocaleTimeString()}`;

                cachedLinksContainer.innerHTML += `
                    <div class="savedLink">
                        <p>Fecha y hora de subida: ${formattedDate}</p>
                        <p>Tamaño del archivo: ${sizeInMegabits.toFixed(2)} MB</p>
                        <p>Fecha de expiración: ${formattedExpirationDate}</p>
                        <a href="${savedLink.link}" target="_blank">${savedLink.link}</a>
                    </div>
                    <br>
                `;
            });
        }

        function saveLinksToCache(link, file) {
            cachedLinks.push({
                link,
                date: new Date(),
                name: file.name,
                size: file.size
            });
            localStorage.setItem('cachedLinks', JSON.stringify(cachedLinks));
            displayCachedLinks();
        }

        function clearCache() {
            localStorage.removeItem('cachedLinks');
            cachedLinks = [];
            displayCachedLinks();
        }

        async function uploadFile() {
            const fileInput = document.getElementById('fileInput');
            const uploadOption = document.getElementById('uploadOption').value;
            const expiration = document.getElementById('expiration').value;
            const responseElement = document.getElementById('response');

            if (fileInput.files.length === 0) {
                responseElement.innerText = 'Por favor, selecciona un archivo';
                return;
            }

            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append('fileToUpload', file);

            try {
                if (uploadOption === 'fileio') {
                    const response = await fetch(FILEIO_HOST, {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();
                    if (response.ok) {
                        document.getElementById('linkContainer').style.display = 'block';
                        const link = data.link;
                        document.getElementById('link').innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
                        files.forEach(file => saveLinksToCache(link, file));
                        // Mostrar el icono de la palomita con animación
                        const checkIcon = document.getElementById('checkIcon');
                        checkIcon.style.display = 'block';
                        checkIcon.classList.add('animate__animated', 'animate__fadeIn');
                    } else {
                        throw new Error(`Error ${response.status}: ${response.statusText}`);
                    }
                } else if (uploadOption === 'catbox') {
                    formData.append('reqtype', 'fileupload');
                    formData.append('userhash', HASH_FILE);
                    const response = await fetch(CATBOX_HOST, {
                        method: 'POST',
                        body: formData
                    });
                    const text = await response.text();
                    responseElement.innerText = `URL generado con Catbox: ${text}`;
                    files.forEach(file => saveLinksToCache(text, file));
                } else if (uploadOption === 'litterbox') {
                    if (!expiration) {
                        responseElement.innerText = 'Proporcione una fecha de expiración para Litterbox.';
                        return;
                    }
                    formData.append('reqtype', 'fileupload');
                    formData.append('time', expiration);
                    const response = await fetch(LITTER_HOST, {
                        method: 'POST',
                        body: formData
                    });
                    const text = await response.text();
                    responseElement.innerText = `URL generado con Litterbox: ${text}`;
                    files.forEach(file => saveLinksToCache(text, file));
                } else {
                    responseElement.innerText = 'Opción inválida, seleccione otra opción.';
                }
            } catch (error) {
                responseElement.innerText = `Error: ${error.message}`;
            }
        }

        document.getElementById('fileInput').addEventListener('change', function() {
            // Ocultar el icono de la palomita al seleccionar un archivo nuevo
            document.getElementById('checkIcon').style.display = 'none';

            // Actualizar la lista de archivos seleccionados
            files = Array.from(this.files);
        });

        function toggleExpirationInput() {
            const uploadOption = document.getElementById('uploadOption').value;
            const expirationContainer = document.getElementById('expirationContainer');
            if (uploadOption === 'litterbox') {
                expirationContainer.style.display = 'block';
            } else {
                expirationContainer.style.display = 'none';
            }
        }

        displayCachedLinks();
     

      
      
      
      
      
        // Array con URLs de imágenes
const imagesArray = [
  'https://i.imgur.com/xLpjXE0.gif',
  'https://i.imgur.com/80MHOrB.gif',
  'https://66.media.tumblr.com/cc8c5565e482137b321f3ec8ac20a00c/tumblr_inline_nl5nohPphc1sptc1c.gif',
'https://files.catbox.moe/a91ute.gif',
'https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-anime-kawaii-12.gif',
'https://pa1.aminoapps.com/6050/43baebbee36542a4ce11fbc909416b5beb4cc2ab_hq.gif',
'https://pa1.aminoapps.com/6050/24240c1bac34c3e5aacc4a81763daa5de02bc233_hq.gif',
'https://pa1.aminoapps.com/6050/a726bdd0c5a43da94aa4839fba7e888909d6f29c_hq.gif',
'https://pa1.aminoapps.com/6050/4c06ddc9120de846759cd641bdda285d5dc46a31_hq.gif',
'https://pa1.aminoapps.com/6050/a62bc89f49ef9ff43ff3c417532d0c19b479578f_hq.gif',
'https://pa1.aminoapps.com/6909/7f3b8fe34ffc10d554707df0d29a7296fb6aa9far1-360-640_hq.gif',
'https://pa1.aminoapps.com/6909/06cb70eb90c81e8e291d21e4e02055422faa2862r1-500-281_hq.gif',
'https://pa1.aminoapps.com/6909/570c321af11daad0068f3ce73f12463f290e39bcr1-320-320_hq.gif',
'https://pa1.aminoapps.com/6909/f9799f918f9bb17f91406d3d5309344c2d14eed7r1-499-500_hq.gif'
  // Añade más URLs de imágenes según sea necesario
];

function mostrarImagenAleatoria() {
  // Obtener un número aleatorio basado en la longitud del array de imágenes
  const randomIndex = Math.floor(Math.random() * imagesArray.length);

  // Obtener el elemento img y establecer su atributo src con la URL de la imagen aleatoria
  const imgElement = document.getElementById('randomImage');
  imgElement.src = imagesArray[randomIndex];
}

// Llamar a la función al cargar la página o cuando sea necesario
mostrarImagenAleatoria();
      
      
      
        // Token de acceso de ipinfo.io (reemplaza 'TU_TOKEN' con tu token real)
        const ipInfoToken = '6b1f42952f063e';
        const visitCountElement = document.getElementById('visitCount');
        const visitorLocationElement = document.getElementById('visitorLocation');

        // Función para obtener la ubicación del visitante
        async function getVisitorLocation() {
            try {
                const response = await fetch(`https://ipinfo.io/json?token=${ipInfoToken}`);
                const data = await response.json();
                return `${data.city}, ${data.region}, ${data.country}`;
            } catch (error) {
                console.error('Error al obtener la ubicación del visitante:', error);
                return 'No disponible';
            }
        }

        // Función para incrementar el contador de visitas
        function incrementVisitCount() {
            let visitCount = localStorage.getItem('visitCount') || 0;
            visitCount++;
            localStorage.setItem('visitCount', visitCount);
            return visitCount;
        }

        // Función para actualizar la información en la página
        async function updatePageInfo() {
            const visitCount = incrementVisitCount();
            const visitorLocation = await getVisitorLocation();

            visitCountElement.textContent = `Total de Visitas: ${visitCount}`;
            visitorLocationElement.textContent = `Ubicación del visitante: ${visitorLocation}`;
        }

        // Llama a la función de actualización al cargar la página
        window.onload = updatePageInfo;
    
      
