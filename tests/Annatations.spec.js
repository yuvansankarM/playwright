import { test, expect } from '@playwright/test';

test('Trace @reg',async({page})=>{
    console.log("test1...")
})
test('Trace2 @reg',async({page})=>{
    console.log("test2...")
})
test.skip('Trace3@snap',async({page})=>{
    console.log("test3...")
})
test('Trace4@snap',async({page})=>{
    console.log("test4...")
})
test.fail('Trace5@snap@reg',async({page})=>{
    console.lo("test5...")
})