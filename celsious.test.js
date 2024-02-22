import assert from "assert"

function celsious(c){
    var f=(c*(9/5)+32)    //formula to convert celsius to fahrenheit
return f
}

describe("celsious to fahrenheit conversion", function(){
    it("check the fahrenheit",function(){
        var result=celsious(6)
        assert.equal(result,"42.8")
    })
})