class CompletedTab {
    validatesTheDisplayOfTheTaskDone(taskName) {
        cy.get('.footer')
            .contains('Completed')
            .click()

        cy.get('.completed')
            .should('be.visible', taskName)
    }

    clearCompleted() {
        cy.get('.footer')
            .contains('Completed')
            .click()

        cy.get('.todo-list').children().should('have.length', 4)
        cy.get('.clear-completed').click()
    }
}

export default new CompletedTab();