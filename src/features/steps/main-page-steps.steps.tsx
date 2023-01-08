import { defineFeature, loadFeature } from 'jest-cucumber';
import { fireEvent, render, screen } from '@testing-library/react';
import App from "../../App";

const feature = loadFeature('./src/features/main-page.feature');

defineFeature(feature, test => {
    test('Increment counter', ({ given, when, then }) => {
        given('I am in the main Page with a counter value of 0', () => {
            render(<App />);
        });
        
        when(/^I click on the "(.*)" button$/, (buttonName: string) => {
            fireEvent.click(
             screen.getByRole('button', { name: buttonName })
            );
        });
        
        then(/^the counter should increment by (\d+)$/, (increment: number) => {
            expect(screen.getByRole('textbox', { name: 'Total'})).toHaveValue(increment);
        });        
    });
  });
