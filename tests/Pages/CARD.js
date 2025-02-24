

exports.Card=
class Card{
    constructor(page){
    this.page=page;
    this.Pruductdetailss=".hrefch";
    this.id="#cartur"
    this.AddCard="//a[@class='btn btn-success btn-lg']"

}
async ProductDetails(productname){
    const products=await this.page.$$(this.Pruductdetailss)
    for(const product of products)
    {
        if(productname==await product.textContent())
        {
            await product.click()
            break
       }
    }
    this.page.on("dialog", async({dialog})=>{
   if(dialog.message().includes("added"))
        {
     dialog.accept()
    }})
    await this.page.locator(this.AddCard).click()

}
async goto(){
    await this.page.locator(this.id).click()
}


}