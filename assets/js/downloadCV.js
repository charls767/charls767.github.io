function downloadCV() {
    // Creamos un elemento 'a' para simular un clic en un enlace de descarga
    var link = document.createElement('a');
    link.href = '../assets/img/work/Hoja_de_vida_CARLOS_ACEVEDO.pdf'; // Especifica la ruta de tu archivo aquí
    link.download = 'Hoja_de_vida_CARLOS_ACEVEDO.pdf'; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiamos el elemento 'a' después de descargar el archivo
  }