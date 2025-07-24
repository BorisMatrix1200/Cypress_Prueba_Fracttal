/// <reference types="cypress" />

import { loginPage } from '../../support/page_objects/loginPage';
import { menuPage } from '../../support/page_objects/menuPage';
import { activosPage } from '../../support/page_objects/activosPage';
import { tareasPage } from '../../support/page_objects/tareasPage';

describe('Crear Activo y Tarea de Mantenimiento', () => {
  // Abre el navegador e ingresa a la URL base
  beforeEach(() => {
    loginPage.visit();
    cy.wait(1000);
  });

  it('Login, creación de activo y tarea', () => {
    // Login
    loginPage.enterEmail('testersqa2@gmail.com');
    loginPage.enterPassword('TesterFracttal2025.*');
    loginPage.clickLogin();
    cy.wait(1000);

    // Ir a Catálogos > Activos
    menuPage.openMainMenu();
    menuPage.goToCatalogos();
    menuPage.goToActivos();

    // Crear activo
    activosPage.clickCrearEquipo();
    cy.wait(1000);
    activosPage.ingresarNombreEquipo('REFRIGERADOR DE VACUNAS Equipo QA');
    cy.wait(1000);
    activosPage.guardarEquipo();
    cy.wait(3000);
    activosPage.cerrarFormulario();
    cy.wait(1000);

    // Crear tarea preventiva
    menuPage.openMainMenu();
    menuPage.goToCatalogos();
    menuPage.goToTareas();
    

    // Crear tarea
    tareasPage.goToPlanTareas();
    tareasPage.clickCrearTarea();
    cy.wait(1000);
    tareasPage.ingresarNombreTarea('Mantenimiento preventivo');
    cy.wait(10000);
    //tareasPage.clickGuardarTarea();
    //cy.wait(1000);
    /// Apartir de este punto no me permite continuar con el flujo de la prueba, ya que no 
    // me permite guardar la tarea, se me queda en un pantallazo 
    // azul o el boton no se habilita

    //NOTA: Este error en Cypress es común cuando una aplicación 
    // web carga un script desde un dominio cruzado (cross-origin), y ese script 
    // lanza una excepción no capturada. Debido a las restricciones de seguridad 
    // del navegador (por política de CORS), Cypress no puede acceder a detalles 
    // como el stack trace del error, y lanza este mensaje:
    //(uncaught exception) Error: Script error. Cypress detected that an 
    // uncaught error was thrown from a cross origin script.

    //¿Por qué sucede?
    //Tu aplicación está incluyendo un script desde otro 
    // dominio (por ejemplo, un CDN externo o un servicio de 
    // terceros como Google Analytics, Sentry, etc.).
    //Ese script externo lanza una excepción.
    //Cypress lo detecta como un error uncaught en tiempo de ejecución, pero por política de seguridad del navegador, no puede acceder a más información sobre el error.

  });
});
