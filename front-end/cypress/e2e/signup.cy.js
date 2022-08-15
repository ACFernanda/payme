/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";

beforeEach(() => {
  cy.resetUsers();
});

describe("sign up test", () => {
  it("Should signup and login successfully", () => {
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
    };

    cy.visit(`${URL}/sign-up`);
    cy.get("#name").type(user.name);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#confirm-password").type(user.password);

    cy.intercept("POST", "/sign-up").as("signup");
    cy.contains("Cadastrar").click();
    cy.wait("@signup");

    cy.url().should("equal", `${URL}/`);
  });
});
