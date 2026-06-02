import { Locator, Page } from "@playwright/test";

export class ForgetPasswordPage {

    readonly emailInput: Locator;
    readonly sendEmailButton: Locator;
    readonly confirmationMessage: Locator;

    constructor(page:Page){

        this.emailInput = page.getByLabel('Email address');
        this. sendEmailButton = page.getByRole('button', { name: 'Send email' })
        this.confirmationMessage = page.getByText('We just sent an email to you with a link to reset your password!');
    }

    goto(page: Page) {
        page.goto('https://app.pluralsight.com/id/forgot-password');
    }
    
    forgotPassword(email: string) {

        this.emailInput.fill(email);
        this.sendEmailButton.click();

    }

    


}
