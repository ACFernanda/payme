Cypress.Commands.add("resetUsers", () => {
  cy.request("POST", "http://localhost:5000/reset-database/users");
});

Cypress.Commands.add("resetBills", () => {
  cy.request("POST", "http://localhost:5000/reset-database/bills");
});

Cypress.Commands.add("createUser", (user) => {
  cy.request("POST", "http://localhost:5000/sign-up", user).then((res) => {
    cy.log(res);
  });
});
