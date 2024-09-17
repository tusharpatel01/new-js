function myfunc(){
 console.log("hello world ");
 console.log("tushar patel");
 
 
}
// myfunc()

// function addtwo(no1,no2){
// console.log(no1+no2);

// }
// const adddtwo=addtwo(3,8) //11
// console.log(adddtwo); //undefined



function addtwo(no1,no2){
    // let result=no1+no2
    // return result
    return no1+no2

    
    }
    const result=addtwo(3,5)
    // console.log(result);

    function logindetail(username="saurabh"){
        // if(username===undefined)
        if(!username){
            console.log("you have not entered the name");
            return
        }
        return `my login detail is depend on username ${username}`
    }
//    const names= logindetail("tushar")
//    console.log(names);

// console.log(logindetail())  //return names as undefined
//   console.log(logindetail("rahsut"))  
    
// day 2
// use of rest operator
function calculateCartPrice(...nums1){
    return nums1
}
 const sum=(calculateCartPrice(2,4,6,8,4));
 console.log(sum);
 


 let element=0
  for (let index = 0; index < sum.length; index++) {
     element = element+sum[index];
    
  }
console.log(element);
