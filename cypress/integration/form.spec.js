describe('Form Tests', ()=>{
    it('add text to the box name', ()=>{
        cy.visit('http://localhost:3000/pizza')
        cy.get('.inputName').type('Hello').should('have.value', `Hello`)
    })
    it('add text to the box special intruccions', ()=>{
        cy.visit('http://localhost:3000/pizza')
        cy.get('.inputName').type('All my special instruccions').should('have.value', `All my special instruccions`)
    })
    it('can select multiple toppings', ()=>{
        cy.get('.top').click({multiple: true})
    })
    it('can submit the form', ()=>{
        cy.get('.submitbtn').click()
    })
})