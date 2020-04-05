describe('Second toolsqa suite',function(){
    it('Second toolsqs test',function(){
        cy.visit('https://demoqa.com/datepicker/')
        cy.get('#datepicker').type('04/02/2017')
        cy.get('#datepicker').invoke('val').then((text) => {
            expect('04/02/2017').to.equal(text);
        });
 
    })
})