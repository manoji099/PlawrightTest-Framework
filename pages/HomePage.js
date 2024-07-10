export const Homepage = class HomePage{
    constructor(page){
        this.page = page;
        this.url = 'https://www.demoblaze.com/'
        this.loginBtn = '#login2'
        this.userName ='#loginusername'
        this.password = '#loginpassword'
        this.loginButton ="//button[@onclick='logIn()']"
    }

    async goToURL(){
        await this.page.goto(this.url);
    }

    async gotoLogin(username, password){
        await this.page.locator(this.loginBtn).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginButton).click()

    }

}