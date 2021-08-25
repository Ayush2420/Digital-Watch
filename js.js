console.log(`This is Element`);
//set
// let dt=new Date();
// console.log (dt);
let newdate= new Date()
console.log(newdate) 
let day=newdate.getDay();
console.log(day)
let month=newdate.getMonth();
console.log(month)
let hours=newdate.getHours();
console.log(hours)
newdate.setDate(32)
console.log(newdate)
 newdate=Date.now()
console.log(newdate)

function displaytime(){
     time.innerHTML=new Date();
}
setInterval(displaytime,1000)