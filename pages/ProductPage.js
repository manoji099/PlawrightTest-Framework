export const Productpage = class ProductPage{
    constructor(){
        this.page = page
        this.products = "//div[@class='col-lg-4 col-md-6 mb-4']/div/div/h4/a"
        this.addCartbtn = "//a[@onClick='addToCart(1)']"
        this.cartBtn = "#cartur"
    }

   async productListPage(productName){
        const listOfProducts = await this.page.$$(this.products);
        for(const product of listOfProducts){
            if(productName == product.textContent()){
                await product.click()
                break;
            }
        }

        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('Product added.')){
            await dialog.accpet()
            }
        })

        await this.page.locator(this.cartBtn).click();
    }

    async gotoCart(){
        this.page.goto('https://www.demoblaze.com/cart.html')
    }

    
}