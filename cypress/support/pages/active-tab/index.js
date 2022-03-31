class ActiveTab {

    validateThatTheDoneItemWasRemovedFromTheListOfAssets(taskName) {
        cy.get('.footer')
            .contains('Active')
            .click()

        cy.get('.todo-list li div label')
            .should('be.visible')
            .and('not.contain', taskName)
    }

    doubleClickToEdit(taskNameToEdit) {
        cy.contains(taskNameToEdit)
            .dblclick()
    }

    fillField(taskNewName) {
        cy.get('.editing')
            .clear()
            .type(`${taskNewName}{enter}`)
    }

    checkAllTasksAsDone(indice) {
        cy.get('.todo-list li')
            .find('input[type=checkbox]')
            .eq(indice)
            .check()
    }
}

export default new ActiveTab();