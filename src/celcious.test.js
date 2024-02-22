import assert from "assert"
import { celcious } from "./celcious.js"



    it("check the fahrenheit",function(){
        var result=celcious(6)
        assert.equal(result,"42.8")
    })
