let myname="hitesh    "
console.log(myname.truelength);

let myheros=["thor", "spiderman"]
let heropower={
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
    
}