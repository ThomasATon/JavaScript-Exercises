function celToFahr(celsius)
{
    var cel = celsius;
    var conversion = cel * 9/5 +32;
    var message = cel + '\xB0C is ' + conversion + ' \xB0F . ';
    console.log(message);
}

function fahrToCel(fahrenheit)
{
    var fahr = fahrenheit;
    var conversion = (fahr - 32) * 5 / 9;
    var message = fahr + '\xB0C is ' + conversion + ' \xB0F . ';
    console.log(message)
}
celToFahr(60);
fahrToCel(45);