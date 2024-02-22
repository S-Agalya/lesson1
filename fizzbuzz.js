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
console.log(genfizbzz(10))
