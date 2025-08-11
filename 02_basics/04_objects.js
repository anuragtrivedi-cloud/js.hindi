// const tinderuser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sumit"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "anurag@gmail.com",

    fullname :{
        username :{
          firstname : "anurag",
          lastname : "trivedi"
        }
    
    }
}

// console.log(regularUser.fullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "anurag@gmail.com"
    },
    {
        id: 3,
        email: "ansh@gmail.com"
    },
]

console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]


// for study of code easily we use jsformatter.org website
// for API use random user me