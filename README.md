# Lumière — Template de Restaurante con AR

Template premium para restaurante con experiencia de Realidad Aumentada integrada,
sin necesidad de ninguna aplicación externa.

---

## Estructura del proyecto

```
lumiere-restaurante/
├── index.html              ← Página principal
├── css/
│   └── style.css           ← Todos los estilos
├── js/
│   ├── dishes.js           ← Catálogo de platillos (editar aquí)
│   └── main.js             ← Lógica: menú, AR modal, partículas, reservas
├── assets/
│   ├── images/             ← Fotos de los platillos (.jpg, .webp)
│   └── models/             ← Modelos 3D para AR (.glb)
└── README.md
```

---

## Cómo personalizar

### 1. Cambiar nombre y datos del restaurante
En `index.html` busca y reemplaza:
- `Lumière` → nombre de tu restaurante
- `Alta cocina · Ciudad de México` → tu ciudad/concepto
- `Av. Presidente Masaryk 123` → tu dirección
- `Chef Marco Villanueva` → nombre del chef

---

### 2. Agregar/editar platillos
Abre `js/dishes.js` y edita el array `dishes`:

```js
{
  id: 7,                          // número único
  category: "postres",            // 'entradas' | 'principales' | 'postres'
  categoryLabel: "Postre",
  name: "Tiramisú de Mezcal",
  desc: "Descripción corta del platillo.",
  price: "$195",
  emoji: "☕",                    // respaldo si no hay imagen
  image: "assets/images/tiramisu.jpg",   // ruta a la foto (o "" para usar emoji)
  modelSrc: "assets/models/tiramisu.glb", // modelo 3D para AR (o "" sin AR)
  info: "Porción de 150g. Sin gluten."
}
```

---

### 3. Agregar fotos de platillos
1. Coloca la imagen en `assets/images/`
2. Formatos recomendados: `.jpg` o `.webp`, relación 4:3
3. Tamaño ideal: 800×600 px
4. En `dishes.js` escribe la ruta en el campo `image`:
   ```js
   image: "assets/images/nombre-del-platillo.jpg"
   ```

---

### 4. Activar la Realidad Aumentada (AR)

La AR funciona con modelos 3D en formato `.glb`.

#### Opciones para conseguir modelos:
| Opción | Descripción | Costo |
|--------|-------------|-------|
| [Sketchfab](https://sketchfab.com) | Biblioteca de modelos 3D de comida | Gratis / Pago |
| [Poly Pizza](https://poly.pizza) | Modelos simples gratis | Gratis |
| Blender | Crear modelos propios desde cero | Gratis (requiere skill) |
| IA generativa | Servicios como Meshy.ai o Tripo3D | Pago |
| Freelancer | Contratar un modelador 3D | $50–$300 por platillo |

#### Cómo asignar el modelo:
1. Coloca el archivo `.glb` en `assets/models/`
2. En `dishes.js` escribe la ruta en `modelSrc`:
   ```js
   modelSrc: "assets/models/ceviche.glb"
   ```
3. Al abrir el platillo en móvil, aparecerá el botón **"Ver en tu mesa"**

#### Compatibilidad AR:
| Dispositivo | Navegador | Tecnología |
|-------------|-----------|------------|
| iPhone / iPad | Safari | Quick Look AR |
| Android | Chrome | Scene Viewer |
| Desktop | Chrome/Edge | WebXR (requiere cámara) |

---

### 5. Conectar el formulario de reservaciones
En `js/main.js`, dentro de la función `handleReserve()`, conecta tu backend:

**Opción A — Formspree (sin backend):**
```html
<form action="https://formspree.io/f/TU_ID" method="POST" ...>
```

**Opción B — EmailJS:**
```js
emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', e.target);
```

**Opción C — Fetch a tu propio backend:**
```js
fetch('/api/reservaciones', {
  method: 'POST',
  body: new FormData(e.target)
});
```

---

### 6. Cambiar colores
En `css/style.css`, edita las variables CSS en `:root`:

```css
:root {
  --gold:       #C9A84C;  /* color dorado principal */
  --cream:      #F5EDD6;  /* texto claro */
  --black:      #080808;  /* fondo negro */
  --green-dark: #0e1a10;  /* sección "Nosotros" */
}
```

---

## Cómo visualizar en VS Code
1. Instala la extensión **Live Server** (ritwickdey.LiveServer)
2. Clic derecho en `index.html` → **Open with Live Server**
3. Se abrirá en el navegador con recarga automática

Para probar la AR: abre la URL local en tu teléfono conectado a la misma red WiFi.

---

## Tecnologías utilizadas
- HTML5 + CSS3 + JavaScript vanilla
- [`<model-viewer>`](https://modelviewer.dev/) — Google — para AR y visor 3D
- Google Fonts: Cormorant Garamond + DM Sans
- WebXR / Quick Look / Scene Viewer para AR nativa

No requiere frameworks ni dependencias npm.
