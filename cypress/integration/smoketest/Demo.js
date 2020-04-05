/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe("This is demo test suite", function()
{
    it("This is demo test case",function()
    {
        cy.visit(Cypress.env('url') + 'AutomationPractice/')
        cy.get('#name').type('Rahul')       
        cy.get('#dropdown-class-example').select('Option2')
        cy.get('#checkBoxOption3').check().should('be.checked')
        cy.get("input[type='checkbox']").first().check()
        cy.get("input[value='radio2']").check()
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello Rahul, share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#confirmbtn').click()
        cy.on('',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })



    }
    )
}
)