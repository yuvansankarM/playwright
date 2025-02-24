import { test,expect} from "@playwright/test"; 

test("api request", async({request})=>
{
var userid;
const respons=await request.get("https://reqres.in/api/users?page=2")
console.log(await respons.json())
expect(respons.status()).toBe(200)
const ADDdetails=await request.post("https://reqres.in/api/users",{
    data:{"name":"Yuvan","job":"SoftwareEngineer"},
    headers:{"Accpet":"application/json"},
})
const res=await ADDdetails.json()
console.log(res)
userid=res.id
expect(ADDdetails.status()).toBe(201)

/*const detailsAdd=await request.put("https://reqres.in/api/users/+userid",{
    data:{"name":"Yuvansankar","job":"SoftwareEngineer 2"},
    headers:{"Accpet":"application/json"},

})
const res1=await detailsAdd.json();
console.log(res1)
expect(detailsAdd.status()).toBe(200)*/
const del=await request.delete("https://reqres.in/api/users/+userid")
expect(del.status()).toBe(204)

})

