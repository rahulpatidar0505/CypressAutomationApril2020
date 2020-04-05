describe('Second toolsqa suite',function(){
    it('Second toolsqs test',function(){
        cy.visit('https://demoqa.com/dialog/')
        cy.get('#dialog > p').should('have.text',"This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.")
        cy.get('.ui-button-icon').click()
        
 
    })
})