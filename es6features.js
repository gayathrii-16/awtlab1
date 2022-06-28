var drivecar= (car) =>{
    if(car=='need'){
        console.log("Petrol is needed")
    }
    else{
        console.log("Not needed")
    }
}
drivecar('need')

let arr = ["Ram","Raj"]
let [firstName , surname] = arr;
console.log(firstName)
console.log(surname)
let [name1,name2,...rest] = ["abc","bcd","cde","def"]
console.log(name1)
console.log(rest[0])

function *myGenerator(){
  console.log(1)
  let a = yield "First Yield"
  console.log(a)
  let b = yield "Second Yield"
  console.log(b)
  return "Hi";

}
let iterator = myGenerator();
let fy = iterator.next();
console.log(fy)

function double(n){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve (n*2)
        },2000)
    })
}
double(2).then(double)
.then(double)
.then(double)
.then(console.log)