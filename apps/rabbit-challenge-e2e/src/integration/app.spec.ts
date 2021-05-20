describe('rabbit-challenge', () => {
  beforeEach(() => cy.visit('/'));
  it('should display welcome message', () => {
    cy.get('input[id="anagram_phrase"]').type('poultry outwits ants');
    cy.get('input[id="easy_hash"]').type('e4820b45d2277f3844eac66c903e84be');
    cy.get('input[id="medium_hash"]').type('23170acc097c24edb98fc5488ab033fe');
    // cy.get('input[id="hard_hash"]').type('665e5bcb0c20062fe8abaaf4628bb154');
    cy.contains('Find Phrase').click();
    cy.contains('Secret Phrase!').wait(1000);
  });
});
