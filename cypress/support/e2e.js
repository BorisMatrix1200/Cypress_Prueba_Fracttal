import '@shelex/cypress-allure-plugin'; // ✅ Importa el plugin
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Puedes filtrar errores específicos si quieres
  if (err.message.includes('Script error')) {
    return false; // Previene que la prueba falle
  }

  // Si quieres ignorar todos los uncaught exceptions
  return false;
});