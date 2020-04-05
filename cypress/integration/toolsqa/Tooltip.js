describe('Second toolsqa suite',function(){
    it('Second toolsqs test',function(){
        cy.visit('https://demoqa.com/tooltip/')
        cy.get('#age')
        .invoke('show')
        .trigger('mouseenter')
        .wait(1000).should('have.attr','title','We ask for your age only for statistical purposes.')
        .trigger('mouseleave');
    })
})