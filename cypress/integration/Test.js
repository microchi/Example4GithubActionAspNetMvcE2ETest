it("visit home page", () => {
    cy.visit("http://localhost:8080")
    cy.contains("ASP.NET");
})

it("visit about page", () => {
    cy.visit("http://localhost:8080")
    cy.get('.navbar').contains("關於").click();
    cy.contains("About");
})

it("visit about page", () => {
    cy.visit("http://localhost:8080")
    cy.get('.navbar').contains("連絡人").click();
    cy.contains("Contact");
})