// WAP to create a new array containing only perfect squares from another array.
const nums = [4,3,64,49,34,18,17,81];
const perfect=[];
for(let i of nums){
    if(Number.isInteger(i ** 0.5)){
        perfect.push(i);
    }
}
console.log(perfect);
// WAP to create a new array containing 10% discounted prices from an array of prices.
const price = [400,367,646,449,340,189,176,334];
const discounted=[];
for(let p of price){
     discounted.push(p * 0.9)}
 
console.log(discounted);
// map
const discountedprice = price.map((p)=>{return p*0.9});
console.log(discountedprice);

const sqrtNums = nums.map((n)=>{return n**2});
console.log(sqrtNums);
const perfectNums = nums.filter((n)=>{return Number.isInteger (n**0.5)});
console.log(perfectNums);

const prices2 = ['₹423.23','₹123.452','₹678.9'];
console.log(parseInt('₹423.23'.slice(1)));

const name = ['ramu','shamu','pinki'];


