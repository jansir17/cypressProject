/// <reference types= "cypress" />

it("Learning Assertions", () => {
  cy.visit("https://example.cypress.io/");
  cy.get(
    ":nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a"
  ).click();
  cy.get("#query-btn")
    .should("contain", "Butt")
    .should("have.class", "btn-primary")
    .should("be.visible")
    .should("be.enabled");
  // .should("be.disabled");

  cy.get("#query-btn").invoke("attr", "id").should("equal", "query-btn");

  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "btn-primary");
});

//Explicit ASsertion

it("explicit CHeck", () => {
  //expect
  cy.visit("https://example.cypress.io/");
  expect(true).to.be.true;

  //assert
  assert.equal(4, 5, "numbers ain't equal");
});
