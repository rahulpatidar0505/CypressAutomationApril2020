/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe("This is demo test suite", function () {
    it("This is demo test case", function () {
        cy.visit(Cypress.env('url') + 'AutomationPractice/')
        cy.get('#name').type('Rahul')
        cy.get('#name').dblclick()
        cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each((element, index, list) => {
            if (element.text().includes('India')) {
                element.click()
            }
        }
        )
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
      
        cy.wait(1000)
        cy.url('includes', 'academy')
        cy.go('back')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('.theme-btn.register-btn').click()
        cy.get('#name').clear().type('Rahul Patidar')
        cy.get('#opentab').then(function(element){
            const url=element.prop('href')
            cy.log(url)
            cy.visit(url)
        })
        // cy.get('#openwindow').click()
    }
    )

}
)