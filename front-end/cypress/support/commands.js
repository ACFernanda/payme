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

Cypress.Commands.add("createUserAndLogin", (user) => {
  cy.request("POST", "http://localhost:5000/sign-up", user).then(() => {
    cy.request("POST", "http://localhost:5000/sign-in", {
      email: user.email,
      password: user.password,
    }).then((res) => {
      cy.log("response", res.body);
      window.localStorage.setItem("user", JSON.stringify(res.body.user));
      window.localStorage.setItem("token", JSON.stringify(res.body.token));
    });
  });
});
