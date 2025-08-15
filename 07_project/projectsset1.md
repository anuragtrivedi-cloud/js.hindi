# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-pav2qiss?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id;
    }

  })
});

```

## project 2 solution

```javascript
const form = document.
querySelector('form')
// this usecase will give you empty
// const height =  parseInt(document.querySelector('#height').value)

const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {
  e.preventDefault();

 const height =  parseInt(document.querySelector('#height').value)

 const weight =  parseInt(document.querySelector('#weight').value)

 const results =  document.querySelector('#results');
 if(height === '' || height < 0||isNaN(height)){
  results.innerHTML = `please give a valid height ${height}`;
 }
//  results.innerHTML =  `${height}`;

 else if(weight === '' || weight < 0||isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`;
 }
 else{
   const BMI = (weight / ((height*height)/10000)).toFixed(2);

   results.innerHTML = `<span>${BMI}</span>`
 
   if(BMI < 18.6){
       results.innerHTML = `Under weight ${BMI}`
   }
   else if(18.6 < BMI < 24.9){
    results.innerHTML = `Normal weight ${BMI}`
}
 }
 
})
```

## project 3 solution
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function (){
  let date = new Date();
  // console.log(date.toLocalTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```