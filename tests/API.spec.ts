import {test, expect} from '@playwright/test';

test.only('Demo API GET Request', async({request})=>{

    const response = await request.get('https://reqres.in/api/users/2');
    await expect (response.status()).toBe(200);
    const text = await response.text();
    await expect(text).toContain('Janet');
    console.log(await response.json());

})


test('Demo API POST Request', async({request})=>{

    const response = await request.post("https://reqres.in/api/users/",{
        data: {
          "name": "Raghav",
          "job": "teacher"
        }
    })
    await expect (response.status()).toBe(201);
    const text = await response.text();
    await expect(text).toContain('Raghav');
    console.log(await response.json());

})


test('Demo API PUT Request', async({request})=>{

    const response = await request.put("https://reqres.in/api/users/2",{
        data: {
          "name": "Raghav",
          "job": "teacher"
        }
    })
    await expect (response.status()).toBe(200);
    const text = await response.text();
    await expect(text).toContain('Raghav');
    console.log(await response.json());

})


test('Demo API DELETE Request', async({request})=>{

    const response = await request.delete("https://reqres.in/api/users/2");
    await expect (response.status()).toBe(204);

})

