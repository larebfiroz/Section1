function addnums(a,b){
     var c= a+b;
    console.log(c);

}
addnums(3,5)
// console.log(c);

const getavg = function (m1,m2,m3){
     const avg = (m1+m2+m3)/3;
    //  console.log(avg);
    return avg;
}
let result = getavg(45,67,87);
console.log(result);
// factorial
const factorial = (n) => {
    let f = 1;
    for(let i=1; i<=n;i++){
        f=f*i;
    }
    return f;
}
let ans = factorial(6);
console.log(ans);

// wap to find sum of all number in a given range
const sumofrange = (range1,range2) => {
    let x = 0;
    for(let i=range1; i<=range2;i++){
        x=x+i;
    }
    return x;
}
console.log(sumofrange(8,10));


