const autos = [
  {
    nombre: "Gol Trend",
    marca: "Volkswagen",
    motor: "1.6 MSI",
    año: 2015,
    color: "Gris",
    valor: "$5.800.000",
    imagen: "https://www.familycar.com.ar/wp-content/uploads/2020/09/20200903_184349491_iOS-1.jpg",
  },
  {
    nombre: "Peugeot 208",
    marca: "Peugeot",
    motor: "1.6 VTi",
    año: 2020,
    color: "Blanco",
    valor: "$8.200.000",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcdKSGeNXHZd2RVhZtp8H_FmibSNc8_fRgQ&s",
  },
  {
    nombre: "Peugeot 206gti",
    marca: "Peugeot",
    motor: "1.6 VTi",
    año: 2006,
    color: "rojo",
    valor: "$10.200.000",
    imagen: "https://parkers-images.bauersecure.com/wp-images/21758/cut-out/930x620/peugeot_206gti.jpg",
  },
  {
    nombre: "vw",
    marca: "vento",
    motor: "2.0t",
    año: 2006,
    color: "Blanco",
    valor: "$10.200.000",
    imagen: "https://cdncla.lavoz.com.ar/files/avisos/aviso_auto/aviso-auto-volkswagen-vento-55267-838.webp",
  },
];

// Mostrar autos en pantalla
const contenedor = document.getElementById("contenedor-autos");

function renderizarAutos(filtrados = autos) {
  contenedor.innerHTML = "";

  filtrados.forEach(auto => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-auto";

    tarjeta.innerHTML = `
      <img src="${auto.imagen}" alt="${auto.nombre}">
      <div class="contenido">
        <h3>${auto.nombre}</h3>
        <p><strong>Marca:</strong> ${auto.marca}</p>
        <p><strong>Motor:</strong> ${auto.motor}</p>
        <p><strong>Año:</strong> ${auto.año}</p>
        <p><strong>Color:</strong> ${auto.color}</p>
        <p><strong>Valor:</strong> ${auto.valor}</p>
        <a class="whatsapp-btn" target="_blank" href="https://wa.me/5491131376888?text=Hola! Quiero más info sobre el ${auto.nombre}">+ Info por WhatsApp</a>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
}

renderizarAutos();

// Buscador
const buscador = document.getElementById("buscador");
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = autos.filter(auto => auto.nombre.toLowerCase().includes(texto));
  renderizarAutos(filtrados);
});
