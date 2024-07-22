// forloop
for(let i=0;i<10;i++){
    console.log(i);
}

// wap to print all number divisble by 7 range 50 to 100
for(i=50;i<100;i++){
    if(i%7===0)
    {
        console.log(i);
    }
}
// wap to print all number divisble by 5 and 7 range 50 to 100
for(i=50;i<100;i++){
    if(i%5===0 && i%7===0)
    {
        console.log(i);
    }
}
// for of loop
const nums =[1,2,3,4,5,6,7];
for (let i of nums){
    console.log(i);
}
// while loop
let a=10;
while(a<20){
    console.log(a);
    a++;
}
// do while loop
let b=10;
do{
    console.log(b);
    b++;

}while(b<10);