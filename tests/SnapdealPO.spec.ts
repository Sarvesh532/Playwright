import {test, expect, Locator} from '@playwright/test';

import { Snapdeal } from '../pageobject/Snapdeal';

test('Hover and click Shirts using POM', async({page})=>{

    const snapdeal = new Snapdeal(page);

    await snapdeal.goto();
    await snapdeal.HoverMensFashion();
    await snapdeal.clickShirts();
    const prod_needed = "TOUGHTEES Cotton Blend Regular Fit Striped Half Sleeves Men's Casual Shirt - Beige ( Pack of 1 )";
    await snapdeal.selectProduct(prod_needed);



})