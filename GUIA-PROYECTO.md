# Rediseño Municipalidad de Puchuncaví — guía del proyecto

Proyecto académico de Beatriz Castro y Sofía Gomara (2026).

## Organización

- `index.html`: portada y acceso a la información municipal.
- `paginas/`: once páginas interiores enlazadas entre sí.
- `css/estilos.css`: **única hoja CSS**. Contiene estilos generales y, al final, bloques identificados por página. Ya no hay elementos `<style>` en los HTML ni estilos inyectados por JavaScript.
- `js/main.js`: noticias, enlaces de interés, navegación, accesibilidad, buscador con sugerencias y preparación de correos desde el formulario.
- `assets/imagenes/`: imágenes del sitio, con directorios `heroes`, `noticias`, `portada`, `slider`, `turismo`, `identidad`.

## Mejoras de interfaz

1. **Buscador:** al escribir al menos dos caracteres aparecen hasta seis resultados sugeridos, con enlaces accesibles. Enter conserva la navegación original al resultado reconocido. Escape cierra las sugerencias.
2. **Formulario en Contacto:** valida nombre, email, área y mensaje, y prepara un correo dirigido a la dirección municipal ya usada en el sitio (`mpuchuncavi@munipuchuncavi.cl`). **No envía mensajes automáticamente** ni los almacena. Depende de que la persona tenga configurada una aplicación de correo.
3. **Responsividad:** estilos del formulario y las sugerencias adaptables al ancho de pantalla; se mantienen las reglas responsive existentes de cada sección, ahora centralizadas en CSS.
4. **Imágenes:** la fotografía `hero-departamentos.jpg` se optimizó de unos 14,7 MB a menos de 0,7 MB y se redujo a 2200 px de ancho para mejorar la carga. Es la misma fotografía.
5. **Organización:** se mantuvieron todas las rutas y contenidos existentes; el título HTML de Dirección de Obras indica ahora que es la sección de trámites.

## Antes de la entrega

- Abrir con Live Server y probar en computador y celular todos los enlaces y menús.
- Verificar visualmente portadas, fondos, tarjetas y fuentes tras centralizar el CSS.
- Verificar envío del formulario mediante la aplicación de correo; sin cliente de correo, usar directamente los datos de contacto de la página.
- Revisar con las herramientas del navegador a 390px, 768px y 1366px de ancho.
- Ejecutar las validaciones W3C y Lighthouse/Core Web Vitals en la versión publicada.
- Completar en la Wiki la observación del sitio original, arquitectura, wireframes, sistema de diseño, maquetas de Figma y explicación de los cambios.
- Publicar en GitHub Pages y comprobar que las rutas relativas funcionan.

## Comprobaciones automatizadas realizadas

- Los 12 archivos HTML enlazan a un único CSS.
- Ninguna página contiene bloques `<style>` internos.
- No se encontraron rutas locales rotas en atributos `href` y `src`.
- No se encontraron IDs repetidos por página.
- `main.js` supera `node --check`.
- La hoja CSS pudo analizarse sin errores de sintaxis de nivel superior.

**Limitación de la verificación:** no fue posible abrir el navegador automatizado por una restricción del entorno. Por tanto, no afirmamos que la revisión visual ni las mediciones reales de Lighthouse estén completadas.
