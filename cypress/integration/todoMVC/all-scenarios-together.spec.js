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

  it('Should validate the entire flow in an it', () => {
    cy.visit('https://todomvc.com/examples/vue/')
    cy.get('.todo-list li').should('not.exist')
    newItem.map(fill => {
      allTab.addItemstoList(`${fill.field}{enter}`)
    })
    allTab.validNumberOfItemsInTheList(newItem.length)
    allTab.markAnItemAsDone(`${newItem[3].field}`)
    completedTab.validatesTheDisplayOfTheTaskDone(`${newItem[3].field}`)
    activeTab.validateThatTheDoneItemWasRemovedFromTheListOfAssets(`${newItem[3].field}`)
    activeTab.doubleClickToEdit('Walk the dog')
    activeTab.fillField('Feed the dragon')
    cy.get('.todo-list li div label')
      .should('be.visible')
      .and('not.contain', 'Walk the dog')
      .and('contain', 'Feed the dragon')
    for (let i = 2; i >= 0; i--) {
      activeTab.checkAllTasksAsDone(i)
    }
    cy.get('.todo-list li').should('not.exist')
    completedTab.clearCompleted()
    cy.get('.todo-list li').should('not.exist')
  })
})
