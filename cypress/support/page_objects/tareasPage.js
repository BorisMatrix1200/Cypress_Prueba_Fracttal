class TareasPage {
  goToPlanTareas() {
    cy.get('.qa-plan-tasks').click();
  }

  clickCrearTarea() {
    cy.get('.qa-add-btn').click();
  }

  ingresarNombreTarea(nombre) {
    cy.get('.MuiOutlinedInput-input').first().type(nombre,  { delay: 2000 });
  }
}

export const tareasPage = new TareasPage();
