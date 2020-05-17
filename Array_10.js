function print_arrays(big_array)
{
    var i,j;
    
    for(i = 0; i<big_array.length; i++)
    {
        let row = i;
        console.log('row ' + row)
        for(j = 0; j<big_array[i].length; j++)
        {
            console.log(big_array[i][j]);
        }
    }
}
print_arrays([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);