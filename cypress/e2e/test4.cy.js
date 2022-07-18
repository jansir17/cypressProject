/// <reference types = "cypress" />

describe("File Download", () => {
  it("Donwloading", () => {
    cy.downloadFile(
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
      "mydownloads",
      "example.jpg"
    );
  });
});
