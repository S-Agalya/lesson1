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
console.log(oddeven(10))