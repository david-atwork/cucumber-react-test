import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am in the main Page with a counter value of 0", () => {
  cy.visit("/");
});

When("I click on the {string} button {int} times", (buttonName: string, times: number) => {
    for(let i=0; i<times; i++) {
        cy.get(`#${buttonName.toLowerCase()}-button`).click();
    }
});

Then('the counter should increment by {int}', (counterStep: number) => {
    cy.get('#counter').contains(counterStep);
});
