# KiroTacos requirements

## Overview
Aplicación web puramente informativa para venta de tacos en Guatemala

## Functional Requirements

### Layout
- Barra superior con el nombre de la página (NavBar)
- Listado de páginas en el Navbar a las que el usuario puede navegar
    - Home
    - Menu
    - Contact
- El usuario podrá usar un buscador de productos del menú, el cual:
    - El usuario buscará productos por nombre
    - El menú se actualiza en tiempo real

### Home
- El usuario ve una presentación de la venta
- Carrusel de imagenes de la venta
- Productos destacados o en oferta

### Menu
- El usuario puede entrar al apartado con todos los productos disponibles
- El usuario ve los productos en forma de cards
- El usuario ve la información general de los productos en el menú
- Por cada producto el usuario podrá ver:
    - Imagen del producto
    - Nombre del producto
    - Ingredientes principales
    - Precio en quétzales

### Contact
- El usuario puede ver:
    - número telefónico
    - dirección
    - horario de atención
    - enlaces a redes sociales
- Ubicación de la tienda

## Pages
### Home
### Menu
### Contact

## Technical Constraints
- Usar HTML puro
- Usar CSS puro
- Usar javascript
- NO singlepage application (NO SPA)
- Usar HTML semántico

## Responsive Requirements
- El sitio debe funcionar en móviles
- El navbar debe adaptarse a pantallas pequeñas
- Las cards del menú deben reorganizarse verticalmente en móviles

## Data Source
- Los productos estarán definidos en archivos JavaScript locales
- No se utilizará base de datos