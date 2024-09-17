// use of for of loop in arrays

const arr=[2,3,4,6,8]
    for (const num of arr) {
        
    console.log(num);
    
}
const str="hello world"
for (const greet of str) {
    if(greet==" "){
continue
    }
    console.log(`greet is ${greet}`);
    
}

//maps in js 

const map=new Map()
map.set('IN','india')
map.set('usa','unites states of america')
console.log(map);
