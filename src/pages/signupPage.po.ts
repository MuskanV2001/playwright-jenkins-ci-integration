import { Locator, Page } from '@playwright/test';

export class SignupPagePO{

    readonly accountinfoheader: Locator;
    readonly titleradiobtn: Locator;
    readonly password: Locator;
    readonly dobday:Locator;
    readonly dobmonth: Locator;
    readonly dobyear: Locator;
    readonly newsletterradio: Locator;

    readonly addressinfoheader: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountbtn: Locator;
    
    constructor(private page: Page){
        this.accountinfoheader = page.locator("//h2/b[contains(text(),'Enter Account Information')]");
        this.titleradiobtn = page.locator("//input[@value='Mr']");
        this.password = page.locator("//input[@type='password']");
        this.dobday = page.locator("#days");
        this.dobmonth = page.locator("#months");
        this.dobyear = page.locator("#years");
        this.newsletterradio = page.locator("#newsletter");
        this.addressinfoheader = page.locator("//h2/b[contains(text(),'Address Information')]");
        this.firstname = page.locator("#first_name");
        this.lastname = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address = page.locator("#address1");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobileNumber = page.locator("#mobile_number");
        this.createAccountbtn = page.locator("//button[@data-qa='create-account']");
    }

    


}