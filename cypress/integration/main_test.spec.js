/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */
describe("main test for stock booklet", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
    
  });

  beforeEach(() => {
     cy.wait(2000);
  })

  it("display header", () => {
    cy.get("[data-cy=header-brand]").should("be.visible");
    cy.get("[data-cy=header-user]").should("be.visible");
    cy.get("[data-cy=header-search]").should("be.visible");
  });

  it("display company profile", () => {
    cy.get("[data-cy=main-header-image]").should("be.visible");
    cy.get("[data-cy=main-header-symbol]").should("be.visible");
    cy.get("[data-cy=main-header-symbol]").contains("TSLA");
    cy.get("[data-cy=main-header-country]").should("be.visible");
    cy.get("[data-cy=main-header-country]").contains("US");
    cy.get("[data-cy=main-header-exchange]").should("be.visible");
    cy.get("[data-cy=main-header-exchange]").contains("NASDAQ NMS - GLOBAL MARKET");
    cy.get("[data-cy=main-header-finnhubIndustry]").should("be.visible");
    cy.get("[data-cy=main-header-finnhubIndustry]").contains("Automobiles");
    cy.get("[data-cy=to-website]").should("be.visible");
    cy.get("[data-cy=to-website]").click();
  })

  it("go to company website", () => {
    cy.get("[data-cy=to-website]").should("be.visible");
    cy.get("[data-cy=to-website]").click();
  })

  it("search a symbol", () => {
    cy.get("[data-cy=header-search]").click().type("AAPL{enter}");
    cy.wait(2000);
    expect(true).to.equal(true);
  });

  it("get another quote", () => {
    cy.get("[data-cy=sidebar]").should("be.visible");
    cy.get("[data-cy=sidebar-watches-groups]").should("be.visible");
    cy.get("[data-cy=sidebar-watches-item-TSLA]").should("be.visible");
    cy.get("[data-cy=sidebar-watches-item-AAPL]").should("be.visible");
    cy.get('[data-cy=sidebar-watches-item-AAPL]').click()
  });

  it("display charts", () => {
    cy.get("[data-cy=quote-chart]").should("be.visible");
    cy.get("[data-cy=volume-chart]").should("be.visible");
  })

  it("display stock news", () => {
    cy.get("[data-cy=stock-posts]").should("be.visible");
  })
});
