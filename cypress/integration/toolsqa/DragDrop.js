/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Second toolsqa suite',function(){
    it('Second toolsqs test',function(){
        cy.visit('https://demoqa.com/droppable/')
        cy.get('#draggable').drag('#droppable')
    })
})