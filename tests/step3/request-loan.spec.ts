import {expect, test} from "playwright/test";
import {LoginPage} from "./pages/login-page";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";
import {RequestLoanPage} from "./pages/request-loan-page";
import {RequestLoanResultPage} from "./pages/request-loan-result-page";

test('Applying for a 999 dollar loan', async ({ page } ) => {

    let loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAs('john', 'demo');

    let accountsOverviewPage = new AccountsOverviewPage(page);
    await accountsOverviewPage.selectMenuItem('Request Loan');

    let requestLoanPage = new RequestLoanPage(page);
    await requestLoanPage.applyForLoan('999', '100', '12456');

    let requestLoanResultPage = new RequestLoanResultPage(page);
    await expect(await requestLoanResultPage.getResult()).toBeVisible();
    await expect(await requestLoanResultPage.getResult()).toHaveText('Approved');
});