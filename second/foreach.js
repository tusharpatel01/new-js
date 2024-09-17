const coding=["js","ruby","java"]

coding.forEach(i => {
    console.log(i);
    
    
});

//use of reduce map and filter functions

const mynumbers=[1,2,3,4,5,6,7,8]
 const mynums=mynumbers.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>40)
//console.log(mynums);

//use of reduce in javascript

 const mydigits=[2,3,5,6,8]
 const mytotal=mydigits.reduce((acc,currval)=>{
   return acc+currval
 },0)
// console.log(mytotal);

const shoppingcart=[{
    itemName: "js",
    price: 2999
},

{
    itemName: "cppcourse",
    price : 399
},
{
    itemName:"java",
    price:400
}
]

const sumrupee=shoppingcart.reduce((acc,total)=>acc+total.price,0)
console.log(sumrupee);
