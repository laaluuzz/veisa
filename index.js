
    // Función para alternar el menú en pantallas pequeñas
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Función para mostrar el submenú en pantallas pequeñas cuando se hace clic en "Servicios"
    const serviciosLink = document.querySelector('.nav-menu li a[href="#"]'); // El enlace de Servicios
    const submenu = document.querySelector('.submenu');
    
    serviciosLink.addEventListener('click', (e) => {
        e.preventDefault(); // Evita la acción predeterminada del enlace
        submenu.classList.toggle('show');
    });


    fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el footer:', error);
            });