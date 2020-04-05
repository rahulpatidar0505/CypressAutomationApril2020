
describe('Second toolsqa suite',function(){
    it('Second toolsqs test',function(){
        cy.visit('https://demoqa.com/tooltip-and-double-click/')
        cy.get('#tooltipDemo')
        .invoke('show')
        .trigger('mouseenter')
        .wait(1000).should('have.attr','class','tooltip')
        .trigger('mouseleave');

        cy.get('#doubleClickBtn').dblclick()
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.include('Double Click Alert')
        })
        cy.get('#rightClickBtn').rightclick()
        // not aware how to select values after righ click
        
        
    })
})
