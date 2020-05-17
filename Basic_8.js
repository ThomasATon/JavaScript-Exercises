const num = Math.ceil(Math.random() * 10); // const means cannot change variable, Ceil rounds up
console.log(num);
const inputNum = prompt('Guess a number between 1 and 10');
if(inputNum == num){
    console.log('Good Work')
}else{
    console.log('Not matched')
}