// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
// console.log(myDate.getMillisecondsr());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());
// console.log(myDate.getVarDate());
console.log(myDate.setDate());
console.log(myDate.setTime());


// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());

// console.log(myDate.toTimeString());

let myCreatedDate = new Date(2025, 6,9,5,3)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date()

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

