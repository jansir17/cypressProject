/// <reference types ="cypress" />

describe("Advance Functionality", () => {
  it("Checking Table Data", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1")
      .find("tbody>tr")
      .first()
      .find("td")
      .find("a")
      .first()
      .click();
    cy.url("match", "#edit");
  });

  it("printing Element", () => {
    cy.get(ul > li)
      .each(($el, $index, $lis) => {
        cy.log("Li element Text is" + $el.text());
      })
      .then(() => {
        expect($lis).to.have.length(3);
      });
    cy.window().its("innerWidth").should("eq", 1000);
  });
});
