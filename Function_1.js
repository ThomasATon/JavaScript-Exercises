function reverse(number)
{
    var reversed = '';
    var i;
    for(i = number.length; i >= 0; i--)
    {
        reversed += number.charAt(i);
    }
    console.log(reversed)
}
var num = 32243;
reverse(num.toString());