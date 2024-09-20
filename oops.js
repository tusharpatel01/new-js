const user = {
    username: "tushar",
    logincount: 8,
    signedin: true,
    getuserdetails: function () {
        console.log("this is the function");
        console.log(`username is ${this.username}`);
        console.log(this);
        
        
 
    }
}
// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);


