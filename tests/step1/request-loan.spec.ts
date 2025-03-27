import {expect, test} from "playwright/test";
import {LoginPage} from "./pages/login-page";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";
import {RequestLoanPage} from "./pages/request-loan-page";
import {RequestLoanResultPage} from "./pages/request-loan-result-page";

test('Applying for a 999 dollar loan', async ({ page } ) => {

    let loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.setUsername('john');
    await loginPage.setPassword('demo');
    await loginPage.doLogin();

    let accountsOverviewPage = new AccountsOverviewPage(page);
    await accountsOverviewPage.gotoRequestLoanForm();

    let requestLoanPage = new RequestLoanPage(page);
    await requestLoanPage.setLoanAmount('999');
    await requestLoanPage.setDownPayment('100');
    await requestLoanPage.selectFromAccountId('12456');
    await requestLoanPage.doApply();

    let requestLoanResultPage = new RequestLoanResultPage(page);
    await expect(await requestLoanResultPage.getResult()).toBeVisible();
    await expect(await requestLoanResultPage.getResult()).toHaveText('Approved');
});