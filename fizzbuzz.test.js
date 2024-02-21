const assert=require("assert")

function genfizbzz(n){
    let res=[];
    for(i=1;i<=n;i++){
    // res.push(i)
     if(i%15==0){
        res.push("fizzbuzz")
    }
     else if(i%3==0 ){
        res.push("fizz")
    }
    else if(i%5==0 ){
        res.push("buzz")
    }
    // else if(i%15==0){
    //     res.push("fizzbuzz")
    // }
    else{
        res.push(i)
    }

    
    }
    return res
}

describe("fizz buzz and fizzbuzz identification ",function(){
    it("i%15==0 =>fizzbuzz, i%3==0 =>fizz , i%5==0 =>buzz",function(){
        var result=genfizbzz(10)
        assert.deepStrictEqual(result,[
           1,      2,      'fizz',
           4,      'buzz', 'fizz',
           7,      8,      'fizz',
           'buzz'
         ])
   
    })
         
})

