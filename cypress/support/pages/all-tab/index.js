class AllTab {
    addItemstoList(item) {
        cy.get('.header input').type(item)
    }

    validNumberOfItemsInTheList(qtdItems) {
        cy.get('.todo-list li')
            .should('have.length', qtdItems)
    }

    markAnItemAsDone(doneItem){
        cy.contains(doneItem)
        .parent()
        .find('input[type=checkbox]')
        .check()
    }
}

export default new AllTab();