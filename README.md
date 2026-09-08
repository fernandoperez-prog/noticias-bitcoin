# Panel de Noticias - Bitcoin

Aplicación con Node.js + Express que consume NewsAPI y muestra noticias sobre Bitcoin.

## Requisitos
- Node.js v18 o superior

## Instalación

\`\`\`bash
npm install
\`\`\`

Crea un archivo `.env` en la raíz con tu apiKey de [newsapi.org](https://newsapi.org):

\`\`\`
NEWS_API_KEY=tu_api_key_aqui
\`\`\`

## Uso

\`\`\`bash
node server.js
\`\`\`

Abre http://localhost:3000

## Endpoints
- `GET /api/noticias` — devuelve el arreglo de noticias sobre "bitcoin" desde NewsAPI.