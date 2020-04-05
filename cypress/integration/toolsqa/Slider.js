describe('Try Slider test ', function () {
    it('Check the slider and test the new slider value', function () {
        cy.visit('https://demoqa.com/slider/')
        cy.get('.ui-slider-handle').as('range')
        .invoke('val', 250)
        .trigger('change')
    })
})