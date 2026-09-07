/**
 * dishes.js — Catálogo de platillos
 *
 * Para agregar un platillo nuevo, agrega un objeto al array con:
 *   id         — número único
 *   category   — 'entradas' | 'principales' | 'postres'
 *   categoryLabel — texto visible en la card
 *   name       — nombre del platillo
 *   desc       — descripción breve (máx ~120 chars)
 *   price      — precio con formato "$000"
 *   emoji      — emoji de respaldo mientras no haya imagen
 *   image      — ruta a imagen real (ej: "assets/images/ceviche.jpg") o "" para usar emoji
 *   modelSrc   — ruta al modelo 3D .glb para AR (ej: "assets/models/ceviche.glb") o "" sin AR
 *   info       — información técnica: gramaje, temperatura, alergenos, etc.
 */

const dishes = [
  {
    id: 1,
    category: "entradas",
    categoryLabel: "Entrada",
    name: "Ceviche de Kampachi",
    desc: "Kampachi del Pacífico, leche de tigre de maracuyá, pepino encurtido y caviar de trucha.",
    price: "$380",
    emoji: "🐟",
    image: "",
    modelSrc: "",
    info: "Porción de 180g. Presentado en bowl de barro negro de Oaxaca. Temperatura: fría. Nivel de picor: suave. Sin gluten."
  },
  {
    id: 2,
    category: "entradas",
    categoryLabel: "Entrada",
    name: "Taco de Tuétano",
    desc: "Médula ósea rostizada, tortilla de maíz azul hecha a mano, salsa macha y cilantro fresco.",
    price: "$290",
    emoji: "🌮",
    image: "",
    modelSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    info: "Porción de 2 tacos. Diámetro de tortilla: 12cm. Presentado en comal de barro sobre la mesa. Contiene gluten."
  },
  {
    id: 3,
    category: "principales",
    categoryLabel: "Plato principal",
    name: "Filete Wellington",
    desc: "Res angus 200g, duxelles de hongo negro, foie gras, hojaldre artesanal y salsa de vino tinto.",
    price: "$890",
    emoji: "🥩",
    image: "",
    modelSrc: "C:/Users/carri/Downloads/lumiere-restaurante2/lumiere-restaurante/assets/models/Meshy_AI_Vibrant_Street_Tacos_0907063803_generate.glb",
    info: "Corte de 200g. Largo: 14cm. Término medio por defecto. Contiene gluten y lácteos."
  },
  {
    id: 4,
    category: "principales",
    categoryLabel: "Plato principal",
    name: "Pato con Mole Negro",
    desc: "Pato confitado 72 horas, mole negro de Oaxaca con 32 ingredientes, plátano macho caramelizado.",
    price: "$720",
    emoji: "🦆",
    image: "",
    modelSrc: "",
    info: "Pieza de pato de 220g. Mole preparado durante 3 días. Acompañado de arroz negro de tinta. Contiene frutos secos."
  },
  {
    id: 5,
    category: "principales",
    categoryLabel: "Plato principal",
    name: "Robalo a la Mantequilla",
    desc: "Robalo del Golfo pochado en mantequilla de hierbas, espárragos blancos y salicornia.",
    price: "$680",
    emoji: "🐠",
    image: "",
    modelSrc: "",
    info: "Filete de 200g. Presentado en plato hondo con consomé de mariscos. Sin gluten. Contiene pescado y lácteos."
  },
  {
    id: 6,
    category: "postres",
    categoryLabel: "Postre",
    name: "Esfera de Chocolate",
    desc: "Esfera de chocolate oscuro 72%, rellena de mousse de vainilla de Papantla y caramelo salado.",
    price: "$245",
    emoji: "🍫",
    image: "",
    modelSrc: "",
    info: "Diámetro: 8cm. El mesero vierte chocolate caliente frente a usted para revelar el interior. Contiene lácteos y huevo."
  }
];
