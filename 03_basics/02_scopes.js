if(true){
    let a = 10
    const b = 20
    var c= 30
}

console.log(a)  // error occur
console.log(b)  //error occur
console.log(c)  // no error  code run properly


function one(){
    const username = "anurag"

    function two(){
        const website  = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}