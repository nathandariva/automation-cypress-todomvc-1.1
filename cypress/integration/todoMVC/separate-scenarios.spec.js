/// <reference types="cypress" />
import allTab from '../../support/pages/all-tab'
import completedTab from '../../support/pages/completed-tab'
import activeTab from '../../support/pages/active-tab'
describe('Platform Scenarios - TODO', () => {

  const newItem = [
    {
      field: 'Feed the cat',
    },
    {
      field: 'Walk the dog',
    },
    {
      field: 'Wash the tesla model',
    },
    {
      field: 'Walk the camel',
    }
  ]

  it('Should validate that it does not display any items listed', () => {
    cy.visit('https://todomvc.com/examples/vue/')
    cy.get('.todo-list li').should('not.exist')
  })

  it('Should validate adding items to the list and validate quantity', () => {

    newItem.map(fill => {
      allTab.addItemstoList(`${fill.field}{enter}`)
    })

    allTab.validNumberOfItemsInTheList(newItem.length)
  })

  it('Should validate mark an item as completed and check it in the completed tab', () => {

    allTab.markAnItemAsDone(`${newItem[3].field}`)
    completedTab.validatesTheDisplayOfTheTaskDone(`${newItem[3].field}`)
  })

  it('Should validate check in the active tab that completed tasks are not visible', () => {
    activeTab.validateThatTheDoneItemWasRemovedFromTheListOfAssets(`${newItem[3].field}`)
  })

  it('Should validate editing of an item in the list', () => {

    activeTab.doubleClickToEdit('Walk the dog')
    activeTab.fillField('Feed the dragon')

    cy.get('.todo-list li div label')
      .should('be.visible')
      .and('not.contain', 'Walk the dog')
      .and('contain', 'Feed the dragon')
  })

  it('Should complete all in active tab', () => {

    for (let i = 2; i >= 0; i--) {
      activeTab.checkAllTasksAsDone(i)
    }

    cy.get('.todo-list li').should('not.exist')
  })

  it('Should validate the cleaning of completed', () => {

    completedTab.clearCompleted()

    cy.get('.todo-list li').should('not.exist')
  })
})
