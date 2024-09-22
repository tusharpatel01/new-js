//after es6
 class user{
    constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
 }
 encryptpassword(){
    return `${this.password}abc`
 }
 changeusername(){
    return `${this.username.toUpperCase()}`
 }
 changeemail(){
    return `${this.email="not found"}`
 }
} 
const chai =new user('tushar','chai@42','w4567uyiu')
console.log(chai.encryptpassword());
console.log(chai.changeusername());
console.log(chai.changeemail());
console.log(this);
console.log(chai);




