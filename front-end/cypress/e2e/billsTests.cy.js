/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";

beforeEach(() => {
  cy.resetBills();
  cy.resetUsers();
});

describe("bill tests suit", () => {
  const user = {
    name: faker.name.firstName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
  };

  const bill = {
    title: faker.lorem.word(),
    dueDay: "10",
    dueMonth: "08",
    dueYear: "2022",
    value: "300",
    recurrence: false,
  };

  beforeEach(() => {
    cy.createUserAndLogin({ ...user, confirmPassword: user.password });
  });

  it("should create bill successfully", () => {
    cy.visit(`${URL}/main`);
    cy.get("#add-bill").click();
    cy.url().should("include", "/bills/new");

    cy.get("#title").type(faker.lorem.word());
    cy.get("#date").type("2022-08-22");
    cy.get("#value").type("1000");
    cy.get("#recurrence").click();

    cy.intercept("POST", "/bills").as("postBill");
    cy.get("#submit").click();
    cy.wait("@postBill");

    cy.url().should("include", "/main");
  });

  it("should delete bill successfully", () => {
    cy.visit(`${URL}/main`);
    cy.get("#add-bill").click();
    cy.url().should("include", "/bills/new");

    cy.get("#title").type(bill.title);
    cy.get("#date").type(`${bill.dueYear}-${bill.dueMonth}-${bill.dueDay}`);
    cy.get("#value").type(bill.value);

    cy.intercept("POST", "/bills").as("postBill");
    cy.get("#submit").click();
    cy.wait("@postBill");

    cy.url().should("include", "/main");

    cy.contains(bill.title).click();
    cy.url().should("include", `/${bill.dueYear}/${bill.recurrence}`);

    cy.get("#delete-all").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.eq(`Deseja deletar TODOS os registros de ${bill.title}?`);
    });

    cy.url().should("include", "/main");
  });
});
