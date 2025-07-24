require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

const openaiApiKey = process.env.OPENAI_API_KEY;
const reportJson = fs.readFileSync('./cypress/reports/mochawesome/report.json', 'utf8');

async function analyzeReport() {
  const prompt = `
    Analiza el siguiente reporte JSON de pruebas automatizadas con Cypress.
    Resume:
    - Cuántas pruebas pasaron/fallaron
    - Nombres de las pruebas fallidas
    - Causas probables
    - Sugerencias para resolverlo
    Aquí está el contenido del reporte JSON:
    ${reportJson}
  `;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    },
    {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
    }
  );

  fs.writeFileSync('cypress/reports/analysis.md', response.data.choices[0].message.content);
  console.log('🔍 Análisis generado: cypress/reports/analysis.md');
}

analyzeReport().catch(console.error);
