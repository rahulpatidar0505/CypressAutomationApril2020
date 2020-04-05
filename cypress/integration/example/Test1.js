/// <reference types="Cypress" />

describe("My first suite", function () {
    it("My first test", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type("ca")

        cy.get('.products').as('productlocator')

        cy.get('@productlocator').find('.product').should('have.length', 4)
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productlocator').find('.product').each((el, index, list) => {
            const veg = el.find('h4.product-name').text()
            if (veg.includes('Cashews')) {
                el.find('button').click()
            }

        })

        // const logo=cy.get('.brand')
        // cy.log(cy.get('.brand').text())
        // cy.log(logo.text())

        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())

        })
    })
})