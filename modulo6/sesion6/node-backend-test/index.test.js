const test = require('node:test');

const assert = require('assert/strict'); //a partir de ECMA 6
const {calcEdad, creaCaja} = require('./index') //llama calcEdad de index.js

test('calcula la edad',()=>{
    return assert.equal(calcEdad(2000),23)
});

test('crea cajita', async(t) =>{
    await t.test('Crea caja pequeña', () => {
        assert.equal(creaCaja(10,10),100)
    });
}); //async = asincrona