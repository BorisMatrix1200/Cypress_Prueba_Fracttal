const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://one.fracttal.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      allureWriter(on, config); // ✅ Esto activa Allure
      return config;
    }
  }
});




// Comandos para ejecutar Cypress y generar reportes de Allure
//npx cypress run                  # Ejecuta pruebas
//Comando para abrir cypress
//npx cypress open                # Abre la interfaz gráfica de Cypress

//Para activar el plugin de allure, 
//npx cypress run --env allure=true
//allure generate allure-results --clean -o allure-report 
//allure open allure-report        # Abre el reporte de Allure