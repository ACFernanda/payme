/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";

beforeEach(() => {
  cy.resetUsers();
});

describe("sign in test", () => {
  const user = {
    name: faker.name.firstName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
  };

  beforeEach(() => {
    cy.createUser({ ...user, confirmPassword: user.password });
  });

  it("should sign in successfully", () => {
    cy.visit(`${URL}/`);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);

    cy.intercept("POST", "/sign-in").as("signin");
    cy.get("#submit").click();
    cy.wait("@signin");

    cy.url().should("equal", `${URL}/main`);
  });
});
