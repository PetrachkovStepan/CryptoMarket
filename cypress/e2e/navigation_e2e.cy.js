describe("Navigation", () => {
  it("should navigate back to homepage from coin", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button").contains("Back").click();
  });
  it("should navigate back to homepage from error", () => {
    cy.visit("/coin/vjzfbvsdhjf");
    cy.get("button").contains("Back").click();
  });
  it("should navigate to coinpage", () => {
    cy.visit("/");
    cy.get("img:first").click();
  });

  it("should navigate to next items list", () => {
    cy.visit("/");
    cy.get("button").contains("Next").click();
  });
  it("should navigate to prev items list", () => {
    cy.visit("/");
    cy.get("button").contains("Prev").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Prev").click();
  });
  it("should navigate to coinpage trought searchbar", () => {
    cy.visit("/");
    cy.get('input[type="text"]')
      .type("bitcoin")
      .should("have.value", "bitcoin");
      cy.get("button[id='searchButton']").click()
  });
});
