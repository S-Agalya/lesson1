import assert from "assert"
import { genfizbzz } from "./fizzbuzz.js"


    it("i%15==0 =>fizzbuzz, i%3==0 =>fizz , i%5==0 =>buzz",function(){
        var result=genfizbzz(10)
        assert.deepStrictEqual(result,[
           1,      2,      'fizz',
           4,      'buzz', 'fizz',
           7,      8,      'fizz',
           'buzz'
         ])
   
    })
         

