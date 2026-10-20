
/* =====================================================
   MUNICIPALIDAD DE PUCHUNCAVÍ
   JAVASCRIPT PRINCIPAL

   Navegación, noticias, accesibilidad y búsqueda.

   BUSCADOR EN CABECERA:
   Fondo verde municipal #33716c
   Letras blancas
   Botón blanco con texto verde

   Visible en todas las páginas.
===================================================== */

"use strict";

/* =====================================================
   RUTAS DEL PROYECTO
===================================================== */

const scriptPrincipal = document.querySelector(
  'script[src$="main.js"]'
);

const proyecto = new URL(
  "../",
  scriptPrincipal ? scriptPrincipal.src : document.baseURI
);

const ruta = (archivo) => {
  return new URL(archivo, proyecto).href;
};

const sitioOriginal =
  "https://www.munipuchuncavi.cl/2.0/sitio10/";

const sitioMunicipal =
  "https://www.munipuchuncavi.cl/";

const enlaceSolicitarInformacion =
  "https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?dirOrg=658";

const enlaceTransparenciaActiva =
  "https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU229";

const enlaceTransparenciaHistorica =
  "https://www.munipuchuncavi.cl/transparencianew2.php";

/* =====================================================
   PREFERENCIAS DE ACCESIBILIDAD
===================================================== */

function preferencia(clave) {
  try {
    return localStorage.getItem(clave);
  } catch {
    return null;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch {
    /* El sitio funciona sin almacenamiento. */
  }
}

/* =====================================================
   NOTICIAS MUNICIPALES

   Fotografías:
   assets/imagenes/noticias/
===================================================== */

const noticiasMunicipales = [
  {
    titulo: "🌱 AMPLÍAN PLAZO PARA CATASTRO POR AFECTACIÓN SILVOAGROPECUARIA",
    fecha: "2026-08-20",
    fechaVisible: "20/08/2026",
    resumen: "Se amplió hasta el 25 de agosto el plazo de aplicación de encuestas del catastro para productores afectados por el último temporal.",
    url: sitioOriginal + "news-amplan-plazo-para-2204.html",
    imagen: ruta("assets/imagenes/noticias/noticia-1.jpg")
  },
  {
    titulo: "PUCHUNCAVÍ PONE EN MARCHA TRES NUEVOS CAMIONES RECOLECTORES DE RESIDUOS DOMICILIARIOS",
    fecha: "2026-08-10",
    fechaVisible: "10/08/2026",
    resumen: "Tres nuevos camiones comenzaron a operar para fortalecer la recolección de residuos domiciliarios en las localidades de la comuna.",
    url: sitioOriginal + "news-puchuncav-pone-en-2203.html",
    imagen: ruta("assets/imagenes/noticias/noticia-2.jpg")
  },
  {
    titulo: "IMPORTANTES ACUERDOS PERMITEN AVANZAR EN EL NUEVO SISTEMA DE ALCANTARILLADO PARA LA GREDA Y VENTANAS",
    fecha: "2026-08-10",
    fechaVisible: "10/08/2026",
    resumen: "El proyecto avanzó mediante nuevos acuerdos institucionales y la obtención de una recomendación favorable para continuar su desarrollo.",
    url: sitioOriginal + "news-importantes-acuerdos-permiten-2202.html",
    imagen: ruta("assets/imagenes/noticias/noticia-3.jpg")
  },
  {
    titulo: "CLUB DEPORTIVO LITORAL DE MAITENCILLO CELEBRÓ 60 AÑOS DE HISTORIA Y TRADICIÓN DEPORTIVA",
    fecha: "2026-08-10",
    fechaVisible: "10/08/2026",
    resumen: "El club conmemoró seis décadas de historia con una jornada que reunió a sus integrantes, autoridades y vecinos.",
    url: sitioOriginal + "news-club-deportivo-litoral-2201.html",
    imagen: ruta("assets/imagenes/noticias/noticia-4.jpg")
  },
  {
    titulo: "PUCHUNCAVÍ Y QUINTERO RENUEVAN COMPROMISO PARA FORTALECER LA CAPACITACIÓN Y EL EMPLEO LOCAL",
    fecha: "2026-08-10",
    fechaVisible: "10/08/2026",
    resumen: "Representantes comunales e instituciones renovaron compromisos de colaboración para ampliar oportunidades de capacitación y empleo.",
    url: sitioOriginal + "news-puchuncav-y-quintero-2200.html",
    imagen: ruta("assets/imagenes/noticias/noticia-5.jpg")
  },
  {
    titulo: "VISITA A TERRENO MARCA AVANCE DE PROYECTO QUE RENOVARÁ EL ALUMBRADO PÚBLICO DE MAITENCILLO",
    fecha: "2026-07-13",
    fechaVisible: "13/07/2026",
    resumen: "Autoridades y vecinos conocieron los alcances del proyecto de modernización del alumbrado público de Maitencillo.",
    url: sitioOriginal + "news-visita-a-terreno-2199.html",
    imagen: ruta("assets/imagenes/noticias/noticia-6.jpg")
  },
  {
    titulo: "CERTIFICAMOS CON ÉXITO EL CURSO DE OPERACIONES BÁSICAS DE PANADERÍA",
    fecha: "2026-07-13",
    fechaVisible: "13/07/2026",
    resumen: "Participantes del curso recibieron su certificación en una actividad desarrollada en la Casa de la Cultura, con apoyo de SENCE y OMIL.",
    url: sitioOriginal + "news-certificamos-con-xito-2198.html",
    imagen: ruta("assets/imagenes/noticias/noticia-7.jpg")
  }
];

/* =====================================================
   ENLACES MUNICIPALES
   SE CONSERVAN LOS 25 ENLACES
===================================================== */

const enlacesMunicipales = [
  {
    area: "INFORME DE GESTIÓN",
    titulo: "Año 2025",
    url: sitioOriginal + "cuentapublica2025.php"
  },
  {
    area: "PERMISO DE CIRCULACIÓN",
    titulo: "Periodo 2026",
    url: sitioOriginal + "circulacion.php"
  },
  {
    area: "BECA MUNICIPAL",
    titulo: "Resultados Beca Municipal 2026",
    url: sitioOriginal + "pdf/becas2026/resultados2026.pdf"
  },
  {
    area: "Secretaría Municipal",
    titulo: "Ley 21.146 - Organizaciones Comunitarias",
    url: sitioOriginal + "organizaciones.php"
  },
  {
    area: "BECA MUNICIPAL",
    titulo: "Postulación beca municipal 2026",
    url: sitioOriginal + "becas2026.php"
  },
  {
    area: "Seguridad Pública",
    titulo: "Plan Comunal de Seguridad Pública 2026-2030",
    url: sitioOriginal + "pdf/seguridad/planseguridad2026.pdf"
  },
  {
    area: "Programa Mujeres Jefas de Hogar",
    titulo: "INSCRIPCIÓN",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScBFF8CBAYiVowmYoDSUAKz2NNEIRcV3tyaVSKTFt1doFYdvQ/viewform?usp=dialog"
  },
  {
    area: "Conformación COSOC",
    titulo: "COSOC 2026-2030",
    url: sitioOriginal + "cosoc2026.php"
  },
  {
    area: "CAMBIO CLIMÁTICO",
    titulo: "PLAN DE ACCIÓN COMUNAL DE CAMBIO CLIMÁTICO",
    url: sitioOriginal + "cambioclimatico2026.php"
  },
  {
    area: "Becas Deportivas 2025",
    titulo: "POSTULACIONES",
    url: sitioOriginal + "becadeportiva2025.php"
  },
  {
    area: "FONDEVE 2025",
    titulo: "POSTULACIONES",
    url: sitioOriginal + "fondeve2025.php"
  },
  {
    area: "SUBVENCIÓN MUNICIPAL 2025",
    titulo: "POSTULACIONES",
    url: sitioOriginal + "submuni2025.php"
  },
  {
    area: "RENDICIONES 2025",
    titulo: "RENDICIÓN FONDEVE Y SUBVENCIONES MUNICIPALES 2025",
    url: sitioOriginal + "rendicion2025.php"
  },
  {
    area: "SECRETARÍA COMUNAL DE PLANIFICACIÓN",
    titulo: "Actualización Plan de Desarrollo 2025-2030",
    url: "https://pladecopuchuncavi.cl/"
  },
  {
    area: "Dirección de Obras Municipal",
    titulo: "PERMISOS PUBLICIDAD DOM",
    url: sitioOriginal + "publicidaddom.php"
  },
  {
    area: "Seguridad Pública",
    titulo: "UNIDAD DE GESTIÓN DE RIESGO DE DESASTRES",
    url: sitioOriginal + "citsu.php"
  },
  {
    area: "ESTRATEGIA ENERGÉTICA LOCAL PARA LA COMUNA DE PUCHUNCAVÍ",
    titulo: "EEL PUCHUNCAVÍ",
    url: sitioOriginal + "eel2024.php"
  },
  {
    area: "REAVALÚO 2025",
    titulo: "Reavalúo 2025",
    url: sitioOriginal + "reavaluo2024.php"
  },
  {
    area: "DIRECCIÓN DE OBRAS MUNICIPAL",
    titulo: "Trámites DOM",
    url: sitioOriginal + "tramitedom.php"
  },
  {
    area: "RESPUESTAS",
    titulo: "ORDENANZA HUMEDALES URBANOS",
    url: sitioOriginal + "respuestashumedal2024.php"
  },
  {
    area: "DERECHOS DE ASEO",
    titulo: "Pague aquí",
    url: "https://www.sem2.gob.cl/tramites/derechos-de-aseo/69060800/buscar"
  },
  {
    area: "PENSIÓN GARANTIZADA UNIVERSAL",
    titulo: "La PGU en tu barrio",
    url: "https://www.chileatiende.gob.cl/fichas/102077-pension-garantizada-universal-pgu"
  },
  {
    area: "Concursos Públicos",
    titulo: "Concursos Públicos",
    url: sitioOriginal + "concursos.php"
  },
  {
    area: "OMIL",
    titulo: "Ofertas Laborales y Capacitaciones",
    url: sitioOriginal + "ofertas.php"
  },
  {
    area: "Contacto",
    titulo: "Teléfonos de interés",
    url: sitioOriginal + "telefonos.php"
  }
];

/* =====================================================
   MOSTRAR LAS SIETE NOTICIAS
===================================================== */

function mostrarNoticias() {

  const contenedor = document.getElementById(
    "listado-noticias"
  );

  if (!contenedor) return;

  contenedor.replaceChildren();

  noticiasMunicipales.forEach((noticia) => {

    const articulo = document.createElement("article");
    articulo.className = "tarjeta-noticia";

    const grafica = document.createElement("div");
    grafica.className = "tarjeta-noticia__imagen";

    const fotografia = document.createElement("img");
    fotografia.src = noticia.imagen;
    fotografia.alt = "";
    fotografia.loading = "lazy";
    fotografia.decoding = "async";
    fotografia.className = "tarjeta-noticia__foto";
    grafica.append(fotografia);
    grafica.setAttribute("aria-hidden", "true");

    const cuerpo = document.createElement("div");
    cuerpo.className = "tarjeta-noticia__contenido";

    const fecha = document.createElement("time");
    fecha.className = "noticia-fecha";
    fecha.dateTime = noticia.fecha;
    fecha.textContent = noticia.fechaVisible;

    const titulo = document.createElement("h3");
    titulo.textContent = noticia.titulo;

    const resumen = document.createElement("p");
    resumen.textContent = noticia.resumen;

    const enlace = document.createElement("a");

    enlace.href = noticia.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = "Leer más ↗";

    enlace.setAttribute(
      "aria-label",
      "Leer noticia: " + noticia.titulo
    );

    cuerpo.append(fecha, titulo, resumen, enlace);
    articulo.append(grafica, cuerpo);

    contenedor.append(articulo);

  });
}

/* =====================================================
   MOSTRAR ENLACES DE INTERÉS
===================================================== */

function mostrarEnlaces() {

  const contenedor = document.getElementById(
    "listado-enlaces"
  );

  if (!contenedor) return;

  contenedor.replaceChildren();

  enlacesMunicipales.forEach((item) => {

    const articulo = document.createElement("article");
    articulo.className = "tarjeta-interes";

    const area = document.createElement("p");
    area.className = "tarjeta-interes__area";
    area.textContent = item.area;

    const titulo = document.createElement("h3");
    titulo.textContent = item.titulo;

    const enlace = document.createElement("a");

    enlace.className = "tarjeta-interes__enlace";
    enlace.href = item.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = "Consultar ↗";

    enlace.setAttribute(
      "aria-label",
      item.area + ": " + item.titulo
    );

    articulo.append(area, titulo, enlace);
    contenedor.append(articulo);

  });
}

/* =====================================================
   ACCESOS INSTITUCIONALES
===================================================== */

function sincronizarAccesosInstitucionales() {

  const accesos = document.querySelector(
    ".enlaces-institucionales"
  );

  if (!accesos) return;

  const links = [
    {
      icono: "▣",
      nombre: "Licitaciones",
      detalle: "de esta institución",
      url: "https://www.mercadopublico.cl/Portal/FeedOrg.aspx?qs=GglaGSU61f%2FtOoMz3UUpng%3D%3D"
    },
    {
      icono: "♙",
      nombre: "Plataforma",
      detalle: "Ley del Lobby",
      url: "https://www.leylobby.gob.cl/"
    },
    {
      icono: "ⓘ",
      nombre: "Solicitar información",
      detalle: "Información pública",
      url: enlaceSolicitarInformacion
    },
    {
      icono: "▤",
      nombre: "Transparencia",
      detalle: "Activa",
      url: enlaceTransparenciaActiva
    },
    {
      icono: "▦",
      nombre: "Transparencia",
      detalle: "Activa histórica",
      url: enlaceTransparenciaHistorica
    }
  ];

  accesos.replaceChildren();

  accesos.setAttribute(
    "aria-label",
    "Accesos institucionales"
  );

  links.forEach((item) => {

    const enlace = document.createElement("a");

    enlace.href = item.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";

    const icono = document.createElement("span");
    icono.className = "acceso-icono";
    icono.setAttribute("aria-hidden", "true");
    icono.textContent = item.icono;

    const texto = document.createElement("span");
    texto.className = "acceso-texto";

    texto.append(
      document.createTextNode(item.nombre)
    );

    const detalle = document.createElement("small");
    detalle.textContent = item.detalle;

    texto.append(detalle);

    const flecha = document.createElement("span");
    flecha.className = "acceso-flecha";
    flecha.setAttribute("aria-hidden", "true");
    flecha.textContent = "↗";

    enlace.append(icono, texto, flecha);
    accesos.append(enlace);

  });

  const barra = accesos.closest(".barra-superior");

  if (barra) {
    barra.classList.add(
      "barra-superior--institucional"
    );
  }

  /* Los cinco accesos se despliegan SOLO en pantallas móviles.
     En computador y tablet se siguen mostrando como antes. */
  accesos.id = "lista-accesos-institucionales";

  if (!document.getElementById("boton-accesos-movil")) {
    const botonAccesos = document.createElement("button");
    botonAccesos.id = "boton-accesos-movil";
    botonAccesos.type = "button";
    botonAccesos.className = "accesos-movil__boton";
    botonAccesos.setAttribute("aria-controls", accesos.id);
    botonAccesos.setAttribute("aria-expanded", "false");
    botonAccesos.innerHTML = '<span>Accesos institucionales</span><span class="accesos-movil__flecha" aria-hidden="true">⌄</span>';
    accesos.parentNode.insertBefore(botonAccesos, accesos);

    botonAccesos.addEventListener("click", () => {
      const abierto = botonAccesos.getAttribute("aria-expanded") === "true";
      botonAccesos.setAttribute("aria-expanded", String(!abierto));
      accesos.classList.toggle("accesos-movil--abiertos", !abierto);
    });
  }
}

/* =====================================================
   NAVEGACIÓN PRINCIPAL
   SE CONSERVAN LAS SEIS SECCIONES
===================================================== */

function sincronizarMenuPrincipal() {

  const menu = document.getElementById(
    "menu-principal"
  );

  if (!menu) return;

  const paginaActual = window.location.pathname;

  const opciones = [
    {
      nombre: "Inicio",
      url: ruta("index.html"),
      seccion: "inicio",
      hijos: []
    },
    {
      nombre: "Trámites y servicios",
      url: ruta("paginas/tramites.html"),
      seccion: "tramites",
      hijos: [
        {
          nombre: "Todos los trámites",
          url: ruta("paginas/tramites.html")
        },
        {
          nombre: "Permiso de circulación",
          url: ruta("paginas/permiso-circulacion.html")
        },
        {
          nombre: "Pagos municipales",
          url: ruta("paginas/pagos-municipales.html")
        },
        {
          nombre: "Trámites Dirección de Obras",
          url: ruta("paginas/direccion-obras.html")
        }
      ]
    },
    {
      nombre: "Comunidad",
      url: ruta("paginas/desarrollo-comunitario.html"),
      seccion: "comunidad",
      hijos: [
        {
          nombre: "Antecedentes históricos",
          url: sitioOriginal + "historia.php",
          externo: true
        },
        {
          nombre: "Ubicación geográfica",
          url: sitioOriginal + "ubicacion.php",
          externo: true
        },
        {
          nombre: "Características",
          url: sitioOriginal + "caracteristicas.php",
          externo: true
        }
      ]
    },
    {
      nombre: "Departamentos",
      url: ruta("paginas/departamentos.html"),
      seccion: "departamentos",
      amplio: true,
      hijos: [
        {
          nombre: "Alcalde y Autoridades Locales",
          url: sitioMunicipal + "autoridades.php",
          externo: true
        },
        {
          nombre: "Alcaldía",
          url: sitioMunicipal + "alcaldia.php",
          externo: true
        },
        {
          nombre: "Área Operativa",
          url: sitioMunicipal + "aoperativa.php",
          externo: true
        },
        {
          nombre: "Departamento de Educación Municipal",
          url: sitioMunicipal + "educacion.php",
          externo: true
        },
        {
          nombre: "Departamento de Salud",
          url: sitioMunicipal + "salud.php",
          externo: true
        },
        {
          nombre: "Dirección de Administración y Finanzas",
          url: sitioMunicipal + "finanzas.php",
          externo: true
        },
        {
          nombre: "Dirección de Desarrollo Comunitario",
          url: sitioMunicipal + "dideco.php",
          externo: true
        },
        {
          nombre: "Dirección de Obras Municipales",
          url: sitioMunicipal + "obras.php",
          externo: true
        },
        {
          nombre: "Dirección de Seguridad Pública",
          url: sitioMunicipal + "seguridad.php",
          externo: true
        },
        {
          nombre: "Dirección de Tránsito y Transporte Público",
          url: sitioMunicipal + "transito.php",
          externo: true
        },
        {
          nombre: "Juzgado de Policía Local",
          url: sitioMunicipal + "juzgado.php",
          externo: true
        },
        {
          nombre: "Oficina de Deportes",
          url: sitioMunicipal + "deportes.php",
          externo: true
        },
        {
          nombre: "Oficina de Medioambiente",
          url: sitioMunicipal + "medioambiente.php",
          externo: true
        },
        {
          nombre: "Secretaría Comunal de Planificación",
          url: sitioMunicipal + "secplan.php",
          externo: true
        },
        {
          nombre: "Secretaría Municipal",
          url: sitioMunicipal + "secretaria.php",
          externo: true
        },
        {
          nombre: "Unidad de Control Interno",
          url: sitioMunicipal + "control.php",
          externo: true
        }
      ]
    },
    {
      nombre: "Turismo",
      url: ruta("paginas/turismo.html"),
      seccion: "turismo",
      hijos: [
        {
          nombre: "Turismo y Museo",
          url: ruta("paginas/turismo.html")
        }
      ]
    },
    {
      nombre: "Contacto",
      url: ruta("paginas/contacto.html"),
      seccion: "contacto",
      hijos: []
    }
  ];

  /* RECONOCER PÁGINA ACTIVA */

  function seccionActiva() {

    if (
      paginaActual.endsWith("/index.html") ||
      paginaActual.endsWith("/")
    ) {
      return "inicio";
    }

    if (
      paginaActual.endsWith("/tramites.html") ||
      paginaActual.endsWith("/pagos-municipales.html") ||
      paginaActual.endsWith("/permiso-circulacion.html") ||
      paginaActual.endsWith("/direccion-obras.html")
    ) {
      return "tramites";
    }

    if (
      paginaActual.endsWith("/desarrollo-comunitario.html") ||
      paginaActual.endsWith("/empleo-omil.html")
    ) {
      return "comunidad";
    }

    if (
      paginaActual.endsWith("/departamentos.html") ||
      paginaActual.endsWith("/seguridad-emergencias.html")
    ) {
      return "departamentos";
    }

    if (paginaActual.endsWith("/turismo.html")) {
      return "turismo";
    }

    if (paginaActual.endsWith("/contacto.html")) {
      return "contacto";
    }

    return "";
  }

  const activa = seccionActiva();

  /* CONSTRUIR MENÚ */

  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";

  const listaPrincipal = document.createElement("ul");
  listaPrincipal.className = "navegacion__lista";

  opciones.forEach((opcion) => {

    const item = document.createElement("li");
    item.className = "navegacion__item";

    const tieneHijos = opcion.hijos.length > 0;

    if (tieneHijos) {
      item.classList.add(
        "navegacion__item--desplegable"
      );
    }

    const enlacePrincipal = document.createElement("a");

    enlacePrincipal.className = "navegacion__enlace";
    enlacePrincipal.href = opcion.url;

    enlacePrincipal.append(
      document.createTextNode(opcion.nombre)
    );

    if (opcion.seccion === activa) {
      enlacePrincipal.setAttribute(
        "aria-current",
        "page"
      );
    }

    if (opcion.externo) {
      enlacePrincipal.target = "_blank";
      enlacePrincipal.rel = "noopener noreferrer";
    }

    if (tieneHijos) {

      const flecha = document.createElement("span");

      flecha.setAttribute(
        "aria-hidden",
        "true"
      );

      flecha.textContent = "⌄";

      enlacePrincipal.append(
        document.createTextNode(" "),
        flecha
      );
    }

    item.append(enlacePrincipal);

    if (tieneHijos) {

      const sublista = document.createElement("ul");
      sublista.className = "navegacion__submenu";

      if (opcion.amplio) {
        sublista.classList.add(
          "navegacion__submenu--amplio"
        );
      }

      opcion.hijos.forEach((subopcion) => {

        const subitem = document.createElement("li");
        const subenlace = document.createElement("a");

        subenlace.href = subopcion.url;
        subenlace.textContent = subopcion.nombre;

        if (subopcion.externo) {
          subenlace.target = "_blank";
          subenlace.rel = "noopener noreferrer";
        }

        subitem.append(subenlace);
        sublista.append(subitem);

      });

      item.append(sublista);
    }

    listaPrincipal.append(item);

  });

  contenedor.append(listaPrincipal);
  menu.replaceChildren(contenedor);
}

/* =====================================================
   MENÚ MÓVIL
===================================================== */

function iniciarMenuMovil() {

  const boton = document.querySelector(
    ".boton-menu"
  );

  const menu = document.getElementById(
    "menu-principal"
  );

  if (!boton || !menu) return;

  function cerrarMenu() {

    menu.classList.remove("is-open");

    boton.setAttribute(
      "aria-expanded",
      "false"
    );

    boton.setAttribute(
      "aria-label",
      "Abrir menú de navegación"
    );
  }

  boton.addEventListener("click", () => {

    const abierto = menu.classList.toggle(
      "is-open"
    );

    boton.setAttribute(
      "aria-expanded",
      String(abierto)
    );

    boton.setAttribute(
      "aria-label",
      abierto
        ? "Cerrar menú de navegación"
        : "Abrir menú de navegación"
    );

  });

  document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
      cerrarMenu();
    }

  });

  menu.querySelectorAll("a").forEach((enlace) => {

    enlace.addEventListener("click", () => {
      cerrarMenu();
    });

  });

  const pantallaGrande = window.matchMedia(
    "(min-width: 901px)"
  );

  pantallaGrande.addEventListener("change", (evento) => {

    if (evento.matches) {
      cerrarMenu();
    }

  });
}

/* =====================================================
   ACCESIBILIDAD
===================================================== */

function iniciarAccesibilidad() {

  const aumentar = document.querySelector(
    '[data-accion="aumentar-texto"]'
  );

  const reducir = document.querySelector(
    '[data-accion="reducir-texto"]'
  );

  const contraste = document.querySelector(
    '[data-accion="alternar-contraste"]'
  );

  const tamanos = [100, 125, 150, 175];

  const guardado = Number(
    preferencia("puchuncavi-tamano-texto")
  );

  let indice = tamanos.includes(guardado)
    ? tamanos.indexOf(guardado)
    : 0;

  function aplicarTamano() {

    document.documentElement.style.fontSize =
      tamanos[indice] + "%";

    guardar(
      "puchuncavi-tamano-texto",
      String(tamanos[indice])
    );

    if (aumentar) {
      aumentar.disabled =
        indice === tamanos.length - 1;
    }

    if (reducir) {
      reducir.disabled = indice === 0;
    }
  }

  if (aumentar) {

    aumentar.addEventListener("click", () => {

      indice = Math.min(
        indice + 1,
        tamanos.length - 1
      );

      aplicarTamano();

    });
  }

  if (reducir) {

    reducir.addEventListener("click", () => {

      indice = Math.max(
        indice - 1,
        0
      );

      aplicarTamano();

    });
  }

  aplicarTamano();

  /* ALTO CONTRASTE */

  function aplicarContraste(activo) {

    document.documentElement.classList.toggle(
      "contraste-alto",
      activo
    );

    if (contraste) {

      contraste.setAttribute(
        "aria-pressed",
        String(activo)
      );
    }

    guardar(
      "puchuncavi-alto-contraste",
      activo ? "si" : "no"
    );
  }

  aplicarContraste(
    preferencia("puchuncavi-alto-contraste") === "si"
  );

  if (contraste) {

    contraste.addEventListener("click", () => {

      const activo =
        document.documentElement.classList.contains(
          "contraste-alto"
        );

      aplicarContraste(!activo);

    });
  }
}

/* =====================================================
   BUSCADOR DE TRÁMITES Y SERVICIOS

   CONSERVA LAS BÚSQUEDAS EXISTENTES
===================================================== */

const destinosBusqueda = [
  {
    palabras: [
      "circulacion",
      "vehiculo",
      "auto",
      "patente vehicular",
      "permiso"
    ],
    archivo: "paginas/permiso-circulacion.html"
  },
  {
    palabras: [
      "pago",
      "patente comercial",
      "aseo",
      "derechos de aseo"
    ],
    archivo: "paginas/pagos-municipales.html"
  },
  {
    palabras: [
      "obras",
      "construccion",
      "edificacion",
      "certificados"
    ],
    archivo: "paginas/direccion-obras.html"
  },
  {
    palabras: [
      "dideco",
      "comunidad",
      "beneficio",
      "ayuda social",
      "orientacion social"
    ],
    archivo: "paginas/desarrollo-comunitario.html"
  },
  {
    palabras: [
      "seguridad",
      "emergencia",
      "prevencion"
    ],
    archivo: "paginas/seguridad-emergencias.html"
  },
  {
    palabras: [
      "omil",
      "empleo",
      "trabajo",
      "laboral"
    ],
    archivo: "paginas/empleo-omil.html"
  },
  {
    palabras: [
      "noticia",
      "actividad",
      "actualidad"
    ],
    archivo: "paginas/noticias.html"
  },
  {
    palabras: [
      "contacto",
      "telefono",
      "directorio",
      "atencion ciudadana"
    ],
    archivo: "paginas/contacto.html"
  },
  {
    palabras: [
      "turismo",
      "museo",
      "visita",
      "localidad",
      "maitencillo",
      "horcon",
      "ventanas",
      "puchuncavi"
    ],
    archivo: "paginas/turismo.html"
  },
  {
    palabras: [
      "departamento",
      "alcaldia",
      "autoridades",
      "direcciones municipales"
    ],
    archivo: "paginas/departamentos.html"
  },
  {
    palabras: [
      "tramite",
      "servicio"
    ],
    archivo: "paginas/tramites.html"
  }
];

function limpiarBusqueda(texto) {

  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function buscarDestino(texto) {

  const busqueda = limpiarBusqueda(texto);

  if (!busqueda) return null;

  return destinosBusqueda.find((destino) => {

    return destino.palabras.some((palabra) => {
      return busqueda.includes(palabra);
    });

  });
}

function iniciarBuscador() {

  const formulario = document.getElementById(
    "buscador-principal"
  );

  const campo = document.getElementById(
    "buscar-servicio"
  );

  const mensaje = document.getElementById(
    "mensaje-busqueda"
  );

  if (!formulario || !campo) return;

  formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const encontrado = buscarDestino(campo.value);

    if (encontrado) {

      window.location.href = ruta(encontrado.archivo);

    } else if (mensaje) {

      mensaje.textContent =
        "No se encontraron coincidencias. " +
        "Consulta Trámites y servicios.";

    }
  });
}

/* Estilos del buscador centralizados en css/estilos.css */


/* =====================================================
   CREAR BUSCADOR DE LA CABECERA

   ESTRUCTURA:
   1. IDENTIDAD MUNICIPAL EXISTENTE
   2. BUSCADOR NUEVO
   3. ATENCIÓN CIUDADANA EXISTENTE
===================================================== */

function iniciarBuscadorCabecera() {

  const cabecera = document.querySelector(
    ".cabecera__principal"
  );

  if (!cabecera) return;

  const identidad = cabecera.querySelector(
    ".identidad"
  );

  const acciones = cabecera.querySelector(
    ".cabecera__acciones"
  );

  if (!identidad || !acciones) return;

  /* EVITAR DUPLICADOS */

  if (
    cabecera.querySelector(
      ".buscador-municipal"
    )
  ) {
    return;
  }


  cabecera.classList.add(
    "cabecera--con-buscador"
  );

  /* FORMULARIO */

  const formulario = document.createElement("form");

  formulario.className = "buscador-municipal";

  formulario.setAttribute(
    "role",
    "search"
  );

  formulario.setAttribute(
    "aria-label",
    "Buscar en el sitio municipal"
  );

  formulario.noValidate = true;

  /* LUPA */

  const icono = document.createElement("span");

  icono.className = "buscador-municipal__lupa";
  icono.setAttribute("aria-hidden", "true");

  icono.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="11" cy="11" r="7"></circle>
      <path d="m20 20-4-4"></path>
    </svg>
  `;

  /* CAMPO DE BÚSQUEDA */

  const campo = document.createElement("input");

  campo.className = "buscador-municipal__campo";

  campo.type = "search";
  campo.name = "busqueda";
  campo.id = "buscar-sitio-municipal";

  campo.placeholder =
    "Buscar trámites, noticias, servicios...";

  campo.setAttribute(
    "aria-label",
    "Buscar trámites, noticias o servicios municipales"
  );

  campo.autocomplete = "off";

  /* BOTÓN */

  const boton = document.createElement("button");

  boton.className = "buscador-municipal__boton";
  boton.type = "submit";
  boton.textContent = "Buscar";

  /* MENSAJES DE BÚSQUEDA */

  const aviso = document.createElement("span");

  aviso.className = "buscador-municipal__aviso";
  aviso.setAttribute("role", "status");
  aviso.setAttribute("aria-live", "polite");

  formulario.append(
    icono,
    campo,
    boton,
    aviso
  );

  /* SUGERENCIAS EN VIVO: resultados claros sin salir de la página */
  const sugerencias = document.createElement("div");
  sugerencias.className = "buscador-municipal__resultados";
  sugerencias.id = "sugerencias-buscador-municipal";
  sugerencias.setAttribute("aria-label", "Sugerencias de búsqueda");
  sugerencias.hidden = true;
  campo.setAttribute("aria-controls", sugerencias.id);
  campo.setAttribute("aria-expanded", "false");
  campo.setAttribute("aria-autocomplete", "list");
  formulario.append(sugerencias);

  const nombresBusqueda = {
    "paginas/permiso-circulacion.html": "Permiso de circulación",
    "paginas/pagos-municipales.html": "Pagos municipales y patentes",
    "paginas/direccion-obras.html": "Trámites Dirección de Obras",
    "paginas/desarrollo-comunitario.html": "Desarrollo comunitario",
    "paginas/seguridad-emergencias.html": "Seguridad y emergencias",
    "paginas/empleo-omil.html": "Empleo y OMIL",
    "paginas/noticias.html": "Noticias municipales",
    "paginas/contacto.html": "Contacto y atención",
    "paginas/turismo.html": "Turismo y Museo",
    "paginas/departamentos.html": "Departamentos municipales",
    "paginas/tramites.html": "Todos los trámites"
  };

  function cerrarSugerencias() {
    sugerencias.hidden = true;
    campo.setAttribute("aria-expanded", "false");
  }

  function actualizarSugerencias() {
    const termino = limpiarBusqueda(campo.value);
    sugerencias.replaceChildren();
    if (termino.length < 2) {
      cerrarSugerencias();
      return;
    }
    const coincidencias = destinosBusqueda.filter((destino) => {
      const nombre = limpiarBusqueda(nombresBusqueda[destino.archivo] || "");
      return nombre.includes(termino) || destino.palabras.some((palabra) =>
        limpiarBusqueda(palabra).includes(termino) || termino.includes(limpiarBusqueda(palabra))
      );
    }).slice(0, 6);

    const encabezado = document.createElement("p");
    encabezado.className = "buscador-municipal__resultados-titulo";
    encabezado.textContent = coincidencias.length
      ? "Resultados sugeridos" : "No encontramos coincidencias";
    sugerencias.append(encabezado);

    coincidencias.forEach((destino) => {
      const enlace = document.createElement("a");
      enlace.href = ruta(destino.archivo);
      enlace.className = "buscador-municipal__resultado";
      enlace.textContent = nombresBusqueda[destino.archivo] || destino.archivo;
      sugerencias.append(enlace);
    });
    sugerencias.hidden = false;
    campo.setAttribute("aria-expanded", "true");
  }

  campo.addEventListener("input", actualizarSugerencias);
  campo.addEventListener("focus", actualizarSugerencias);
  campo.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarSugerencias();
    if (evento.key === "ArrowDown" && !sugerencias.hidden) {
      const primero = sugerencias.querySelector("a");
      if (primero) { evento.preventDefault(); primero.focus(); }
    }
  });
  sugerencias.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") { cerrarSugerencias(); campo.focus(); }
  });
  document.addEventListener("click", (evento) => {
    if (!formulario.contains(evento.target)) cerrarSugerencias();
  });

  /* UBICACIÓN ENTRE LOGO Y BOTÓN */

  cabecera.insertBefore(
    formulario,
    acciones
  );

  /* FUNCIONAMIENTO */

  formulario.addEventListener(
    "submit",
    (evento) => {

      evento.preventDefault();

      const texto = campo.value.trim();

      if (!texto) {

        aviso.textContent =
          "Escribe lo que deseas buscar.";

        campo.focus();
        return;
      }

      const destino = buscarDestino(texto);

      if (destino) {

        window.location.href = ruta(
          destino.archivo
        );

      } else {

        aviso.textContent =
          "No se encontró una sección para esa búsqueda.";

        campo.setCustomValidity(
          "No se encontró una sección. Prueba con trámites, comunidad, turismo, noticias o contacto."
        );

        campo.reportValidity();
        campo.setCustomValidity("");
      }

    }
  );
}

/* =====================================================
   FORMULARIO DE ORIENTACIÓN CIUDADANA
   Prepara un correo en el cliente: NO simula envío.
===================================================== */
function iniciarFormularioOrientacion() {
  const formulario = document.getElementById("formulario-orientacion");
  if (!formulario) return;
  const aviso = document.getElementById("formulario-orientacion-aviso");
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!formulario.reportValidity()) {
      if (aviso) aviso.textContent = "Completa los campos obligatorios antes de continuar.";
      return;
    }
    const datos = new FormData(formulario);
    const nombre = String(datos.get("nombre") || "").trim();
    const correo = String(datos.get("correo") || "").trim();
    const tipo = String(datos.get("tipo") || "").trim();
    const mensaje = String(datos.get("mensaje") || "").trim();
    const asunto = "Consulta desde el portal municipal: " + tipo;
    const cuerpo = ["Nombre: " + nombre, "Correo de respuesta: " + correo,
      "Motivo: " + tipo, "", "Consulta:", mensaje].join("\n");
    const enlace = "mailto:mpuchuncavi@munipuchuncavi.cl?subject=" +
      encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
    if (aviso) aviso.textContent =
      "Se abrirá tu correo para revisar y enviar la consulta. El sitio no la envía automáticamente.";
    window.location.href = enlace;
  });
}

/* =====================================================
   INICIAR TODAS LAS FUNCIONES
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* CABECERA */

  sincronizarAccesosInstitucionales();
  iniciarBuscadorCabecera();

  /* MENÚ PRINCIPAL */

  sincronizarMenuPrincipal();
  iniciarMenuMovil();

  /* NOTICIAS Y ENLACES */

  mostrarNoticias();
  mostrarEnlaces();

  /* ACCESIBILIDAD */

  iniciarAccesibilidad();

  /* BUSCADOR EXISTENTE */

  iniciarBuscador();
  iniciarFormularioOrientacion();

});

/* CARRUSEL DE INICIO: integrado desde index.html, sin cambiar la lógica. */
document.addEventListener("DOMContentLoaded", function () {

      const carrusel = document.getElementById("portada-carrusel");

      if (!carrusel) return;

      const pista = carrusel.querySelector(".portada-carrusel__pista");

      const diapositivas = Array.from(
        carrusel.querySelectorAll(".portada-carrusel__slide")
      );

      const botonAnterior = carrusel.querySelector(
        ".portada-carrusel__flecha--izquierda"
      );

      const botonSiguiente = carrusel.querySelector(
        ".portada-carrusel__flecha--derecha"
      );

      const indicadores = Array.from(
        carrusel.querySelectorAll(".portada-carrusel__indicador")
      );

      let indiceActual = 0;
      let intervalo = null;

      const tiempoAutomatico = 5000;

      const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      function actualizar() {

        pista.style.transform =
          "translateX(-" + (indiceActual * 100) + "%)";

        diapositivas.forEach(function (diapositiva, indice) {

          const activa = indice === indiceActual;

          diapositiva.setAttribute(
            "aria-hidden",
            activa ? "false" : "true"
          );

          if ("inert" in diapositiva) {
            diapositiva.inert = !activa;
          }

          diapositiva.querySelectorAll("a").forEach(function (enlace) {
            enlace.tabIndex = activa ? 0 : -1;
          });

        });

        indicadores.forEach(function (indicador, indice) {

          const activo = indice === indiceActual;

          indicador.classList.toggle("activo", activo);

          if (activo) {
            indicador.setAttribute("aria-pressed", "true");
          } else {
            indicador.setAttribute("aria-pressed", "false");
          }

        });
      }

      function irA(indice) {

        indiceActual =
          (indice + diapositivas.length) % diapositivas.length;

        actualizar();
      }

      function siguiente() {
        irA(indiceActual + 1);
      }

      function anterior() {
        irA(indiceActual - 1);
      }

      function detenerAutomatico() {

        if (intervalo !== null) {
          clearInterval(intervalo);
          intervalo = null;
        }
      }

      function iniciarAutomatico() {

        detenerAutomatico();

        if (movimientoReducido.matches) return;

        if (document.hidden) return;

        if (carrusel.matches(":hover")) return;

        if (carrusel.contains(document.activeElement) &&
            document.activeElement !== document.body) return;

        intervalo = window.setInterval(function () {
          siguiente();
        }, tiempoAutomatico);
      }

      botonAnterior.addEventListener("click", function () {
        anterior();
        iniciarAutomatico();
      });

      botonSiguiente.addEventListener("click", function () {
        siguiente();
        iniciarAutomatico();
      });

      indicadores.forEach(function (indicador, indice) {

        indicador.addEventListener("click", function () {
          irA(indice);
          iniciarAutomatico();
        });

      });

      carrusel.addEventListener("mouseenter", detenerAutomatico);

      carrusel.addEventListener("mouseleave", iniciarAutomatico);

      carrusel.addEventListener("focusin", detenerAutomatico);

      carrusel.addEventListener("focusout", function (evento) {
        if (!carrusel.contains(evento.relatedTarget)) {
          iniciarAutomatico();
        }
      });

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          detenerAutomatico();
        } else {
          iniciarAutomatico();
        }
      });

      if (movimientoReducido.addEventListener) {
        movimientoReducido.addEventListener(
          "change",
          iniciarAutomatico
        );
      }

      /* Deslizamiento con el dedo en pantallas táctiles */

      let inicioToqueX = null;

      carrusel.addEventListener("touchstart", function (evento) {

        if (evento.touches.length === 1) {
          inicioToqueX = evento.touches[0].clientX;
          detenerAutomatico();
        }

      }, { passive: true });

      carrusel.addEventListener("touchend", function (evento) {

        if (inicioToqueX === null) return;

        const finToqueX = evento.changedTouches[0].clientX;
        const diferencia = finToqueX - inicioToqueX;

        if (Math.abs(diferencia) > 55) {
          if (diferencia < 0) {
            siguiente();
          } else {
            anterior();
          }
        }

        inicioToqueX = null;
        iniciarAutomatico();

      }, { passive: true });

      actualizar();
      iniciarAutomatico();

    });

/* FIN DE main.js */
