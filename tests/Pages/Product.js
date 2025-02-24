exports.Products=
class Products{
  constructor (page){
    this.page = page;
    this.productdetails="//tbody[@id='tbodyid']/tr/td[2]"

  }
  async Findproducts(productName)
  {
    const product=await this.page.$$(this.productdetails)
    for(const products of product)
    {
        if(productName== await products.textContent())
        {
            return true;
            break;
        }
    }
  }


}