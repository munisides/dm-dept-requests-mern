/// <reference types="cypress" />

describe('ts01 - Smoke tests',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('tc01- verify dashboard page h1', () => {
        cy.get('h1', {timeout: 10000}).should('contain', 'Welcome to the Dashboard');
    });

    it('tc02- verify design and construction page h1', () => {
        cy.get('a', {timeout: 10000}).contains('Design and Construction')
            .should('contain', 'Design and Construction').click();
    });
    it('tc03- verify design and construction page h1', () => {
        cy.get('h1', {timeout: 10000}).should('contain', 'Welcome to Design and Construction');
    });

    it('tc04- verify space management page h1', () => {
        cy.get('a', {timeout: 10000}).contains('Space Management')
            .should('contain', 'Design and Construction').click();
    });
    it('tc05- verify space management page h1', () => {
        cy.get('h1', {timeout: 10000}).should('contain', 'Welcome to Space Management');
    });

    it('tc06- verify project request page h1', () => {
        cy.get('a', {timeout: 10000}).contains('Project Request')
            .should('contain', 'Project Request').click();
    });
    it('tc07- verify project request page h1', () => {
        cy.get('h1', {timeout: 10000}).should('contain', 'Request a Project');
    });
});
