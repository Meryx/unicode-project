describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page, using the baseUrl defined in the config
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About"
    cy.get("h1").contains("About");
  });
});
