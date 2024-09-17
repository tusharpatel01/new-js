myobj={
    name:"tusha",
    age:22,
    fullname:"tusharpatel",
    fathersname:"sherbahadursingh",
    mothername:"santosh",
}
// console.log(myobj);
obj2={
    fullName:{
        username:{
            first:"rahsut",
            second:"patel"
        }

    }
}
// console.log(obj2.fullName.username.first);

// merging of objects in one with the help of one object
const obj1 = {1: "a", 2: "b"}
const obj5 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj5 }

const obj3=Object.assign({},obj1,obj5,obj4)

// console.log(obj3);


// objects inside array and therir  access through indexing

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(users[1]);
