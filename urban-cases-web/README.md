# Urban Cases · Pedido mayorista

Web app para que los clientes mayoristas de Urban Cases armen su pedido y lo envíen por WhatsApp a Male.

## Archivos

```
index.html     ← la app (no hace falta tocarla para cambiar stock o precios)
catalogo.js    ← productos, modelos, stock, precios, cotización, mínimo y WhatsApp
logo.png       ← logo (header, favicon y PDF)
fotos/         ← opcional, fotos de productos
README.md
```

**Todo lo que cambia día a día está en `catalogo.js`.** Male le pide los cambios a Claude en el proyecto ("de la Funda Cube A15 no hay stock"). Claude edita el archivo y el cambio se publica.

## Qué hay en catalogo.js

```js
config: {
  cotizacion: 1450,            // ARS por 1 USD → precio en pesos = precio_usd × cotizacion
  minimo: 100000,              // pedido mínimo en ARS
  whatsapp: "5491123456789",   // número de Male: 549 + área sin 0 + número sin 15
  fecha_lista: "19/11/2026",
  iva: 0,                      // 0 = precios finales; 21 = precios sin IVA
  descuentos: [ { desde: 300000, pct: 10 } ]   // [] = sin descuentos
},
productos: [
  { producto: "Funda Cube", categoria: "Fundas", precio_usd: 2.5, foto: "fotos/funda-cube.jpg", mas_vendido: true, activo: true,
    modelos: [
      { codigo: "CUB-A15", modelo: "Samsung A15", stock: true },   // hay stock
      { codigo: "CUB-A55", modelo: "Samsung A55", stock: false },  // SIN STOCK
      { codigo: "CUB-IP15", modelo: "iPhone 15", stock: 4 }        // hay 4 (no deja pedir más)
    ] }
]
```

- **categoria**: cada categoría distinta se convierte en un botón de filtro.
- **modelo**: es lo que encuentra el buscador. Escribilo como lo buscaría un cliente (`Samsung A15`, `Motorola G75`, `iPhone 13`).
- **precio_usd por modelo**: opcional. Si un modelo cuesta distinto, se agrega dentro de ese modelo.
- **activo: false**: oculta el producto sin borrarlo.

> El archivo que se entrega ahora tiene **productos de ejemplo**. Para cargar el catálogo real, mandale a Claude en el proyecto la lista de productos (puede ser un Excel, una foto de la lista o texto).

## Publicar en GitHub Pages

1. Creá una cuenta en github.com.
2. **New repository** → nombre, por ejemplo `pedidos` → Public → **Create**.
3. **Add file → Upload files** → arrastrá `index.html`, `catalogo.js`, `logo.png` y `README.md` → **Commit changes**.
4. **Settings → Pages** → Branch `main`, carpeta `/ (root)` → **Save**.
5. Al minuto la web queda en `https://TU-USUARIO.github.io/pedidos/`. Ese es el link para los clientes.

Cada vez que cambia `catalogo.js` en el repositorio, la web se actualiza en 1 o 2 minutos. Algunos celulares pueden mostrar la versión anterior hasta 10 minutos más.

**Si hay que subir el archivo a mano:** en el repositorio, **Add file → Upload files** → arrastrá el `catalogo.js` nuevo, con el mismo nombre → **Commit changes**. Reemplaza al anterior.

Si `catalogo.js` llega a tener un error, la app no se rompe: muestra el último catálogo que ese celular cargó bien y avisa que puede no estar actualizado.

## Fotos

1. Subí las fotos al repositorio dentro de una carpeta `fotos/`, con nombres simples y sin espacios ni tildes (`funda-cube.jpg`).
2. En el producto, poné `foto: "fotos/funda-cube.jpg"`. También sirve una URL completa.
3. Usá fotos de unos 600 px y menos de 200 KB. Sin foto, o si no carga, se muestra el logo.

## Cómo funciona el pedido

- El cliente carga cantidades. Los modelos sin stock no se pueden pedir, y si el stock tiene número, no deja pasarse.
- La barra de abajo muestra el total y cuánto falta para el mínimo. Sin llegar al mínimo, no se puede enviar.
- En "Ver pedido" el cliente edita cantidades, completa sus datos y lo envía por WhatsApp, con el detalle por código. También puede descargar un PDF.
- El nombre, el WhatsApp y el historial quedan guardados en el celular del cliente. Desde **Perfil → Repetir pedido** se vuelve a cargar un pedido anterior con los precios y el stock de hoy.
- `enviarPedidoAlServidor(pedido)`, en `index.html`, está vacía y preparada por si más adelante se quiere registrar cada pedido en un servidor.
