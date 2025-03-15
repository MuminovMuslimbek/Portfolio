export const navbarLinks = [
  {
    path: "/",
    text: "Bosh sahifa",
  },
  {
    path: "/projects",
    text: "Loyihalar",
  },
  // {
  //   path: "/me",
  //   text: "Haqimda",
  // },
  {
    path: "/blog",
    text: "Blog",
  },
];

//
// {
//     "id": 1,
//     "title": "Tailwind CSS 4.0: Yangi imkoniyatlar va o'zgarishlar",
//     "slug": "tailwind-4-yangi-imkoniyatlar",
//     "excerpt": "Tailwind CSS 4.0 - bu eng yangi versiyasi bilan CSS yozish usulini butunlay o'zgartiruvchi yangilanishlar keltirdi. Keling, asosiy yangi xususiyatlar bilan tanishamiz.",
//     "content": "Tailwind CSS 4.0 - bu frameworkning eng so'nggi va eng katta yangilanishi. Ushbu versiya tezlik, samaradorlik va yanada moslashuvchanlikni keltirib chiqardi.\n\n### Asosiy yangi xususiyatlar:\n\n1. **Yangi \"Zero-Runtime\" Engine**\n   - Endi CSS fayllar to'liq build vaqtida generatsiya qilinadi\n   - Brauzerga yuklanadigan kod hajmi 95% ga kamaydi\n\n2. **Tezlikda sezilarli yaxshilanish**\n   - Avvalgi versiyalarga nisbatan 10x tezroq ishlaydi\n   - Katta loyihalarda ham build vaqti 2-3 soniyadan oshmaydi\n\n3. **Dynamic Classlar bilan ishlash**\n```html\n<!-- Yangi usul: Dynamic klasslarni bemalol ishlatish -->\n<div class=\"text-{size}-{color}\">\n  Kontent\n</div>\n```\n\n4. **Integratsiya qilingan Design Tokens**\n   - CSS variables orqali mavzu sozlash osonlashtirildi\n```css\n/* Yangi theme konfiguratsiyasi */\n@config {\n  theme: {\n    colors: {\n      primary: \"#3b82f6\"\n    }\n  }\n}\n```\n\n5. **Yangi Utility Klasslar**\n   - `animate-in`, `animate-out` - animatsiyalar uchun yangi klasslar\n   - `aspect-[ratio]` - o'zgaruvchan aspect ratio\n   - `text-balance` - matn balansini avtomatik sozlash\n\n6. **Optimallashtirilgan CLI**\n```bash\n# Yangi CLI buyruqlari\ntailwind css build --minify\ntailwind css watch --hot-reload\n```\n\n### Migratsiya qilish uchun maslahatlar:\n1. Eski `@tailwindcss/jit` pluginini o'chirib tashlang\n2. Yangi konfiguratsiya fayl strukturasi:\n```javascript\n// tailwind.config.js\nexport default {\n  content: ['./src/**/*.{html,js}'],\n  engine: {\n    runtime: false\n  }\n}\n```\n\n### Afzalliklari:\n- Brauzerda ishlash tezligi\n- Kichikroq CSS fayl hajmi\n- Real vaqtda stil o'zgartirish imkoniyati\n- TypeScript bilan to'liq qo'llab-quvvatlash\n\nTailwind 4.0 CSS yozish tajribasini butunlay yangi darajaga ko'taradi. Yangi xususiyatlar va optimallashtirishlar bilan u har qanday loyiha uchun ideal yechim bo'lib qolmoqda.",
//     "author": "Muslimbek Muminov",
//     "date": "2024-01-15"
//   },
