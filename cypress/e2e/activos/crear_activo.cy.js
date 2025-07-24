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

    tareasPage.goToPlanTareas();
    tareasPage.clickCrearTarea();
    cy.wait(1000);
    tareasPage.ingresarNombreTarea('Mantenimiento preventivo');
    cy.wait(10000);
    /// Apartir de no me permite continuar con el flujo de la prueba, ya que no me permite guardar la tarea, se me queda en un pantallazo azul o el boton no se habilita
  });
});
