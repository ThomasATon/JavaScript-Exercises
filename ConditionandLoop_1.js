function compare_int(num1, num2)
{
    if(parseInt(num1, 10) === parseInt(num2, 10))
    {
        console.log('These numbers are equal: ' + num1);
    }
    else if(num1 > num2)
    {
        console.log(num1);
    }
    else
    {
        console.log(num2);
    }
}
// test1 = window.prompt('Enter first number', '0'); Can use window.prompt for input in browser
// test2 = window.prompt('Enter second number', '0');
var test1 = 1;
var test2 = 2;
compare_int(test1,test2);