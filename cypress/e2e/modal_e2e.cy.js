describe("App E2E CoinPage", () => {
  it("should search input change value", () => {
    cy.visit("/");
    cy.get('input[type="text"]')
      .type("bitcoin")
      .should("have.value", "bitcoin");
  });
  it("add modal be open", () => {
    cy.visit("/");
    cy.get("button").contains("Add").click();
    cy.get("dialog");
  });
  it("add modal add coin function", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button").contains("Add").click();
    cy.get("dialog")
      .get('input[placeholder="count"]')
      .type("3")
      .should("have.value", "3");
      cy.get("dialog").get("button").contains("Buy").click();
    cy.get("dialog").get("input").should("have.value", "");
  });
  it("briefcase modal be open close", () => {
    cy.visit("/coin/bitcoin");
    cy.get("header").get("button").contains("USD").click();
    cy.get("dialog").get("article");
    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
  });
  it("briefcase modal delete function", () => {
    cy.visit("/coin/bitcoin");
    cy.get("button").contains("Add").click();
    cy.get("dialog")
      .get('input[placeholder="count"]')
      .type("3")
      .should("have.value", "3");
    cy.get("button").contains("Buy").click();
    cy.get("dialog").click({ multiple: true, force: true }, 15, 40);
    cy.get("header").get("button").contains("USD").click();
    cy.get("dialog").get('input[id="deleteInput"]').type("1")
    cy.get("dialog").get("button").contains("Delete").click();
  });
});
