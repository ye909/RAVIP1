function cargarArchivo(file) {
  fetch(file)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.getElementById("contenido").innerHTML = data;
    });
}

window.onload = function () {
  fetch("./scr/templei/heder.html")
    .then((response) => response.text())

    .then((data) => {
      document.getElementById("header").innerHTML = data;

    //   const registrolink = document.getElementById("registrolink");
    //   registrolink.addEventListener("click", (e) => {
    //     e.preventDefault();

    //     const registro = document.getElementById("registro");
    //     registro.removeAttribute("class", "containeRegistro");
    //   });
      cargarArchivo("./scr/templei/contenidor.html");
    });
};
