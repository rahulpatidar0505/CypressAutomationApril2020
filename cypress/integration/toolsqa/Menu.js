describe('Second toolsqa suite',function(){
    it('Second toolsqs test',function(){
        cy.visit('https://demoqa.com/menu/')
        // cy.get('#ui-id-4').invoke('show')
        cy.contains('Books').click({force:true})
        cy.wait(1000)
        cy.contains('Electronics').click({force:true})

        //by invoking show and without force click
        cy.get('#ui-id-4').invoke('show')
        cy.contains('Utilities').click()

        cy.contains('Modern').click({force:true})
    })
})