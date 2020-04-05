describe('Try Slider test ', function () {
    it('Check the slider and test the new slider value', function () {
        cy.visit('https://demoqa.com/selectmenu/')

        cy.get('#speed-button').click()
        cy.get("div ul>li[class='ui-menu-item']").contains('Fast').click()  

        cy.get('#files-button').click()
        cy.get("div ul>li[class='ui-menu-item']").contains('file').click() 

        cy.get('#number-button').click()
        cy.get("div ul>li[class='ui-menu-item").contains(2).click()

        cy.get('#salutation-button').click()
        cy.get("div ul>li[class='ui-menu-item").contains('Mr').click()
    })
})