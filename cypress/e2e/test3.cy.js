/// <reference types = "cypress" />

describe("file uploading test suit", () => {
  it("uploading Moon", () => {
    const filePath = "Moon.jpg";
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile(filePath);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("Moon.jpg");
  });
});
