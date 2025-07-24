class MenuPage {
  openMainMenu() {
    cy.get('.qa-main-menu-btn').click();
  }

  goToCatalogos() {
    cy.contains('Catálogos').click();
  }

  goToActivos() {
    cy.contains('Activos').click();
  }

  goToTareas() {
    cy.contains('.qa-item-menu-sidebar', 'Tareas').click();
  }
}

export const menuPage = new MenuPage();
