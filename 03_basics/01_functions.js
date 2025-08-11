function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUsermessage(username ="sam"){
  return` ${username} just logged in`
}

// console.log(loginUsermessage("anurag"))
// console.log(loginUsermessage(""))
// console.log(loginUsermessage())


function loginUsermessage(username){
  if(!username){
    console.log("please enter the user name");
    return
  }
// OR
  // if(username === undefined){
  //   console.log("please enter the user name");
  //   return
  // }


  return` ${username} just logged in`
}


// rest operator
function calculatecartPrice(...num1){
  return num1
}

console.log(calculatecartPrice(200,300,400,500))

const user ={
  username : "hitesh",
  price: 199
}

function handelObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelobject(user)
handelObject({
  username : "ansh",
  price: 399
})


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));