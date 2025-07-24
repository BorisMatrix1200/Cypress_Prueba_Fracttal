class TareasPage {
  goToPlanTareas() {
    cy.get('.qa-plan-tasks').click();
  }

  clickCrearTarea() {
    cy.get('.qa-add-btn').click();
  }

  ingresarNombreTarea(nombre) {
    cy.get('.MuiOutlinedInput-input').first().type(nombre,  { delay: 2000 }).invoke('removeAttr', 'disabled');
  }

   clickGuardarTarea() {
    cy.get('.qa-btn-save-details').should('be.disabled').click();
  }
  
}

export const tareasPage = new TareasPage();
