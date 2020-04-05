/// <reference types="Cypress" />

describe("Suite", function()
{
    it("Test", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#name').type('Rahul')
        //cy.xpath('//input[@id="name"]').type('Rahul')
        
        cy.get('[for="radio2"] > .radioButton').check()
        cy.get('#checkBoxOption3').check()
        cy.get('#dropdown-class-example').select('Option2')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.get('#hide-textbox').click()
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').type('testing')
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each((el,index,list) => {
            if(el.text().includes('India')){
                el.click()
                
            }
        })
    }
    )

})