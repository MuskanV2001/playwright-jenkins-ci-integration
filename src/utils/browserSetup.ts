import { test as basetest} from '../fixtures/appFixtures';
import { HomePageHelper } from '../helpers/homePage.helper';

export const test = basetest.extend<{homePagehelper: HomePageHelper}>({    
    homePagehelper: async ({ page }, use) => {
        await use(new HomePageHelper(page));
    }
});

test.beforeEach(async( {homePagehelper}) => {
    console.log("Launching the application..");
    await homePagehelper.gotoHomePage();
});

test.afterEach( async({ page }) => {
    console.log("Closing session");
    await page.context().clearCookies();
});