/// <reference types = "cypress" />

describe("youtube test", () => {
  it("you", () => {
    cy.visit("https://youtube.com");
  });
});

it("google test", () => {
  cy.visit("https://google.com");
  cy.get("div");
  cy.get(".gLFyf", { timeout: 6000 }).type("Automation Step by Step {enter}");
  // cy.get('[href="https://automationstepbystep.com/"] > .LC20lb').click();
  // cy.wait(4000);
  cy.contains("Images").click();
});

it("login test", function () {
  cy.visit("https://github.com/jansir17");
});

describe("Facebook test", () => {
  it("face", () => {
    cy.visit("https://www.facebook.com/");
  });
});
