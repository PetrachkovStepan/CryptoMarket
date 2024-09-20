describe("Select", () => {
  //homepage
  it("list sort selector rank", () => {
    cy.visit("/");
    cy.get("select").select("rank");
  });
  it("list sort selector Price", () => {
    cy.visit("/");
    cy.get("select").select("Price");
  });
  it("list sort selector 24h change", () => {
    cy.visit("/");
    cy.get("select").select("24h change");
  });
  it("list sort selector Market cap", () => {
    cy.visit("/");
    cy.get("select").select("Market cap");
  });
  //coinpage
  it("list sort selector Price Day", () => {
    cy.visit("/coin/bitcoin");
    cy.get("select").select("Day");
  });
  it("list sort selector Price 1 hour", () => {
    cy.visit("/coin/bitcoin");
    cy.get("select").select("1 hour");
  });
  it("list sort selector Price 12 hours", () => {
    cy.visit("/coin/bitcoin");
    cy.get("select").select("12 hours");
  });
});
