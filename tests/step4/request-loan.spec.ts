import {expect, test} from "playwright/test";
import {LoginPage} from "./pages/login-page";
import {AccountsOverviewPage} from "./pages/accounts-overview-page";
import {RequestLoanPage} from "./pages/request-loan-page";
import {RequestLoanResultPage} from "./pages/request-loan-result-page";
import {User} from "./dataobjects/user";
import {LoanApplication} from "./dataobjects/loan-application";

test('Applying for a 999 dollar loan', async ({ page } ) => {

    let validUser: User = {
        username: 'john',
        password: 'demo'
    }

    let loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAs(validUser);

    await new AccountsOverviewPage(page).selectMenuItem('Request Loan');

    let approvedLoanApplication: LoanApplication = {
        amount: 999,
        downPayment: 100,
        fromAccountId: 12456
    }

    await new RequestLoanPage(page).applyForLoan(approvedLoanApplication);

    let requestLoanResultPage = new RequestLoanResultPage(page);
    await expect(await requestLoanResultPage.getResult()).toBeVisible();
    await expect(await requestLoanResultPage.getResult()).toHaveText('Approved');
});