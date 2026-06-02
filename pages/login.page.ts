import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly forgotPasswordLink: Locator;


    constructor(page: Page) {
        this.usernameInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot password?' });

  
    }

    async goto(page: Page){
       await page.goto('https://app.pluralsight.com/id');
    }

    async login(username:string, password:string) {
        this.usernameInput.fill(username);
        this.passwordInput.fill(password);
        this.signInButton.click();
    }

    async forgotPassword() {

        this.forgotPasswordLink.click();
    }

}