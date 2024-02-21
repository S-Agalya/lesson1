function oddeven(n){
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
 res=[]
 for(i=1;i<=n;i++){
 if(i%2==0){
    res.push("even")
 }
    if(isPrime(i)){
        res.push(i)
    }
else{
    res.push("odd")
}
 } return res
}


const assert=require("assert")


describe(" finding the oddoreven ", function(){
    it("replacing the odd and even numbers",function(){
        var result=oddeven(10)
        assert.deepStrictEqual(result,[
            'odd', 'even', 2,
            3,     'even', 'odd',
            5,     'even', 'odd',
            7,     'even', 'odd',
            'odd', 'even', 'odd'
          ])
    })
})