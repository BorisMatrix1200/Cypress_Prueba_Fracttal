class ActivosPage {
  clickCrearEquipo() {
    cy.get('.MuiSpeedDial-fab').click();
    cy.get('.qa-speed-dial-equipment').click();
  }

  ingresarNombreEquipo(nombre) {
    cy.get('.MuiInputBase-root.Mui-error').find('input').type(nombre);
  }

  guardarEquipo() {
    cy.get('.MuiToolbar-root > .MuiButton-contained').click();
  }

  cerrarFormulario() {
    cy.get('.MuiToolbar-root > .MuiButton-text').click();
  }
}

export const activosPage = new ActivosPage();
