// Can also use String.protype.Sub_String = function()
// You use it as this: "dog".Sub_String();
function subString(string)
{
    var subset = [];
    var i,j; 
    for(i = 0; i<string.length; i++)
    {
        for(j = i+1; j<string.length+1; j++) // string.length gives us [ 'd', 'do', 'o' ]
        // Because it stops right before full dog and resets to starting lette ro
        {
            subset.push(string.slice(i, j));
            // Slicing at 0 and 1, which gives us d
            // as j moves along, you get more characters
            // When j reaches end, it resets to i+1, which should be i = 1
            // Then you continue to the next starting letter

        }
    }
    return subset;

}
console.log(subString('dog'));