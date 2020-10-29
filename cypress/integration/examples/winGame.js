describe('Gets to certificate page', function () {
  it('Answers all questions correctly', function () {
    cy.visit('/first-case-intro');
    cy.contains('Accept').click();
    cy.contains("Check it's true or fake").click();
    cy.url().should('contain', '/badge');
    cy.contains('Troll Hunter');
    cy.contains('Accept').click();
    cy.url().should('contain', '/cases');
    cy.contains('Next Case').click();
    cy.url().should('contain', '/second-case-intro');
    cy.contains('Accept').click();
    cy.contains('Doesn’t look right').click();
    cy.url().should('contain', '/badge');
    cy.contains('Thief Buster');
    cy.contains('Accept').click();
    cy.url().should('contain', '/cases');
    cy.contains('Next Case').click();
    cy.url().should('contain', '/third-case-intro');
    cy.contains('Accept').click();
    cy.contains('!!').click();
    cy.contains('?').click();
    cy.contains('01').click();
    cy.wait(30000).then(() => {
      cy.url().should('contain', '/badge');
    });
    cy.contains('Hack Attack');
    cy.contains('Accept').click();
    cy.url().should('contain', '/certificate');
    cy.contains('PLAY AGAIN').click();
    cy.contains('CLICK HERE TO BUILD YOUR PROFILE');
    cy.get('#agent').type('Dragon');
    cy.get('#age').type(9);
    cy.get('#country').select('United Kingdom');
    cy.contains('CLICK HERE').click();
    cy.url().should('contain', '/profile');
    cy.get('#Facebook3').click();
    cy.get('#Whatsapp2').click();
    cy.contains('START YOUR FIRST TASK').click();
    cy.url().should('contain', '/first-case-intro');
    cy.contains('Accept').click();
    cy.contains('2 Points');
  });
});
