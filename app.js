'use strict';
let nameuser = prompt('please enter your name');
let gender = (prompt('please enter your gender female or male ').toLowerCase());
let age = parseInt(prompt('Enter your age'));
if (age <= 0) {
    alert('Your age is incorrect. Please enter your age again');
    prompt('Enter your age');
}
let value = confirm("Do you want to skip the welcome message?");
if (!value) {
    if (gender == 'female') {
        alert(`Welcome MS ${nameuser}`);
    } else if (gender == 'male') {
        alert(`Welcome MR ${nameuser}`);
    }
    else {
        alert(`welcome ${nameuser}`);
    }

}


let Answer1= prompt('Are you UI/UX Student ?');

let Answer2= prompt('Do you love IT ?');

let Answer3= prompt('DO you finish the Assignment ?');

let yourAnswer =[];


 function yourvale(Answer){
    if (Answer===""){ yourAnswer.push('invalid')

} else if (Answer==="yes"){yourAnswer.push('yes')}
  else if (Answer==="no"){yourAnswer.push('no')} }

  yourvale(Answer1)
  yourvale(Answer2)
  yourvale(Answer3)
  console.log(yourAnswer);

for (let index = 0; index < yourAnswer.length; index++) {
   console.log(yourAnswer[index]);

}
