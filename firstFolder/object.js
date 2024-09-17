const mysym = Symbol("key1")
const user={
    name:"tushar",
   "full name":"tushar patel",
    [mysym]: "mykey1",
    age:22,
    is_holiday:true

}
console.log(user.name)
console.log(user["age"])
console.log(user["full name"]);
console.log(mysym);


