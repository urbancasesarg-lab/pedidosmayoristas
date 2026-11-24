/* ============================================================
   CATÁLOGO URBAN CASES
   Es el único archivo que se edita para cambiar stock, precios,
   cotización o productos. La app (index.html) lo lee al abrir.

   STOCK de cada modelo:
     stock: true    → hay stock (sin límite de cantidad)
     stock: false   → SIN STOCK (se muestra "Sin stock" y no se puede pedir)
     stock: 25      → hay 25 unidades (no deja pedir más de 25)

   PRECIOS: precio_usd del producto aplica a todos sus modelos.
   Si un modelo tiene precio distinto, agregale su propio precio_usd.
   Precio en pesos = precio_usd × cotizacion (redondeado).

   activo: false   → oculta el producto entero sin borrarlo.
   mas_vendido: true → aparece en el filtro "Más vendidos".
   foto: "fotos/archivo.jpg" (subida al repo) o una URL completa. Vacío = logo.

   ⚠ DATOS DE EJEMPLO: reemplazar por el catálogo real de Urban Cases.
   ============================================================ */
window.CATALOGO = {
  config: {
    cotizacion: 1610,              // ARS por 1 USD
    minimo: 100000,                // pedido mínimo en ARS (sobre el subtotal, antes de descuentos)
    whatsapp: "5491124046588",     // número de Male: 549 + área sin 0 + número sin 15
    mensaje_inicio: "Hola Male! Te paso mi pedido mayorista:",          // primera línea del WhatsApp
    mensaje_cierre: "Quedo a la espera de la confirmación de stock, pago y envío. ¡Gracias!", // última línea
    fecha_lista: "19/11/2026",     // texto de "lista del …"
    iva: 0,                        // 0 = precios finales. Si los precios son SIN IVA, poné 21
    descuentos: []                 // vacío [] = sin descuentos por monto. Ej.: [ { desde: 300000, pct: 10 } ]
  },

  productos: [
    {
      producto: "Funda Techwoven", categoria: "Fundas", precio_usd: 9.6, foto: "fotos/funda-techwoven.jpg", mas_vendido: false, activo: true,
      modelos: [
        { codigo: "TW-IP15",   modelo: "iPhone 15",         stock: true },
        { codigo: "TW-IP16",   modelo: "iPhone 16",         stock: true },
        { codigo: "TW-IP16P",  modelo: "iPhone 16 Pro",     stock: true },
        { codigo: "TW-IP16PM", modelo: "iPhone 16 Pro Max", stock: true },
        { codigo: "TW-IP17",   modelo: "iPhone 17",         stock: true },
        { codigo: "TW-IP17P",  modelo: "iPhone 17 Pro",     stock: true },
        { codigo: "TW-IP17PM", modelo: "iPhone 17 Pro Max", stock: true },
        { codigo: "TW-IP18P",  modelo: "iPhone 18 Pro",     stock: true },
        { codigo: "TW-IP18PM", modelo: "iPhone 18 Pro Max", stock: true }
      ]
    },
    {
      producto: "Funda Cube", categoria: "Fundas", precio_usd: 2.5, foto: "", mas_vendido: true, activo: true,
      modelos: [
        { codigo: "CUB-A15",  modelo: "Samsung A15",   stock: true },
        { codigo: "CUB-A25",  modelo: "Samsung A25",   stock: true },
        { codigo: "CUB-A35",  modelo: "Samsung A35",   stock: true },
        { codigo: "CUB-A55",  modelo: "Samsung A55",   stock: false },
        { codigo: "CUB-G75",  modelo: "Motorola G75",  stock: true },
        { codigo: "CUB-G85",  modelo: "Motorola G85",  stock: true },
        { codigo: "CUB-IP13", modelo: "iPhone 13",     stock: true },
        { codigo: "CUB-IP14", modelo: "iPhone 14",     stock: true },
        { codigo: "CUB-IP15", modelo: "iPhone 15",     stock: 4 },
        { codigo: "CUB-RN13", modelo: "Redmi Note 13", stock: true }
      ]
    },
    {
      producto: "Silicone Case con felpa", categoria: "Silicone case", precio_usd: 3.2, foto: "", mas_vendido: true, activo: true,
      modelos: [
        { codigo: "SIL-IP11",  modelo: "iPhone 11",     stock: true },
        { codigo: "SIL-IP12",  modelo: "iPhone 12",     stock: true },
        { codigo: "SIL-IP13",  modelo: "iPhone 13",     stock: true },
        { codigo: "SIL-IP14",  modelo: "iPhone 14",     stock: true },
        { codigo: "SIL-IP15",  modelo: "iPhone 15",     stock: true },
        { codigo: "SIL-IP15P", modelo: "iPhone 15 Pro", stock: true, precio_usd: 3.4 }
      ]
    },
    {
      producto: "Antigolpe transparente", categoria: "Fundas", precio_usd: 1.8, foto: "", mas_vendido: false, activo: true,
      modelos: [
        { codigo: "AG-A05",  modelo: "Samsung A05",  stock: true },
        { codigo: "AG-A15",  modelo: "Samsung A15",  stock: true },
        { codigo: "AG-A25",  modelo: "Samsung A25",  stock: false },
        { codigo: "AG-G24",  modelo: "Motorola G24", stock: true },
        { codigo: "AG-G54",  modelo: "Motorola G54", stock: true },
        { codigo: "AG-R13C", modelo: "Redmi 13C",    stock: true }
      ]
    },
    {
      producto: "Funda Glitter Sirena", categoria: "Fundas", precio_usd: 2.2, foto: "", mas_vendido: false, activo: true,
      modelos: [
        { codigo: "GLI-A15",  modelo: "Samsung A15", stock: true },
        { codigo: "GLI-A25",  modelo: "Samsung A25", stock: true },
        { codigo: "GLI-IP13", modelo: "iPhone 13",   stock: true }
      ]
    },
    {
      producto: "Funda MagSafe Clear", categoria: "Fundas", precio_usd: 3.6, foto: "", mas_vendido: true, activo: true,
      modelos: [
        { codigo: "MS-IP13",   modelo: "iPhone 13",         stock: true },
        { codigo: "MS-IP14",   modelo: "iPhone 14",         stock: true },
        { codigo: "MS-IP15",   modelo: "iPhone 15",         stock: true },
        { codigo: "MS-IP15PM", modelo: "iPhone 15 Pro Max", stock: true, precio_usd: 3.8 }
      ]
    },
    {
      producto: "Vidrio templado 9D", categoria: "Pantalla", precio_usd: 0.9, foto: "", mas_vendido: true, activo: true,
      modelos: [
        { codigo: "VT-A15",  modelo: "Samsung A15",  stock: true },
        { codigo: "VT-A25",  modelo: "Samsung A25",  stock: true },
        { codigo: "VT-G75",  modelo: "Motorola G75", stock: true },
        { codigo: "VT-IP13", modelo: "iPhone 13",    stock: true },
        { codigo: "VT-IP15", modelo: "iPhone 15",    stock: true }
      ]
    },
    {
      producto: "Cargador 20W USB-C", categoria: "Accesorios", precio_usd: 5.5, foto: "", mas_vendido: false, activo: true,
      modelos: [ { codigo: "CAR-20W", modelo: "Universal", stock: true } ]
    },
    {
      producto: "Cable USB-C a Lightning 1 m", categoria: "Accesorios", precio_usd: 2.1, foto: "", mas_vendido: false, activo: true,
      modelos: [ { codigo: "CAB-CL1", modelo: "Universal", stock: true } ]
    },
    {
      producto: "Cable USB-C a USB-C 1 m", categoria: "Accesorios", precio_usd: 1.9, foto: "", mas_vendido: false, activo: true,
      modelos: [ { codigo: "CAB-CC1", modelo: "Universal", stock: true } ]
    },
    {
      producto: "Soporte auto magnético", categoria: "Accesorios", precio_usd: 3.9, foto: "", mas_vendido: false, activo: true,
      modelos: [ { codigo: "SOP-MAG", modelo: "Universal", stock: false } ]
    },
    {
      producto: "Pop socket", categoria: "Accesorios", precio_usd: 0.8, foto: "", mas_vendido: false, activo: false,
      modelos: [ { codigo: "POP-01", modelo: "Universal", stock: true } ]
    }
  ]
};
