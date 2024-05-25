
function fitIntroDimensions() {
    // Obtener las dimensiones de la pantalla
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    // Obtener el elemento con id 'intro'
    let introElement = document.getElementById('intro');
    // Cambiar el width y height del elemento 'intro'
    introElement.style.width = screenWidth+40 + 'px';
    introElement.style.height = screenHeight+40 + 'px';
    // Opcional: Mostrar las dimensiones en la consola
    console.log("Screen Width: " + screenWidth + "px");
    console.log("Screen Height: " + screenHeight + "px");
}

// Llamar a la función al cargar la página

// Añadir un event listener para ajustar dimensiones al redimensionar la ventana
window.addEventListener('resize', fitIntroDimensions);

document.addEventListener('scroll', function() {
    const colors = ['#ff5733', '#820000', '#06524e', '#4f4d08'];
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;
    const colorIndex = Math.floor(scrollFraction * colors.length);
    
    document.body.style.backgroundColor = colors[colorIndex % colors.length];
});

window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  fitIntroDimensions();
