class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class teacher extends user{
constructor(username,email,password){
    super(username)
this.email=email
this.password=password

}
addcource(){
    console.log(`new cource is added by ${this.username}`);
    
}
}
const chai= new teacher('chai','eamil.com','23456')
chai.addcource();