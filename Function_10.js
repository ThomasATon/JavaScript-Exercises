function matrix(n)
{
    var i;
    var j;
    // print identity matrix
    for(i = 0; i<n; i++)
    {
        for(j = 0; j < n; j++)
        {
            if(i===j)
            {
                console.log('1');
            }
            else{
                console.log('0');
            }
        }
        console.log('----------------------');
    }
} // logic: For each run of i, if the j matches, print a 1. 
// Because i is being incremented, only one i from each run should match with the increments of j
// This forms the identity matrix

matrix(4);
