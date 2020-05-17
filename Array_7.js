function sort(array1)
{
    var i, j;
    for(i = 0; i<array1.length; i++)
    {
        for(j = 0; j<array1.length; j++)
        {
            if(array1[j] > array1[j+1])
            {
                let tmp = array1[j];
                array1[j] = array1[j+1];
                array1[j+1] = tmp;
            }
        }
    }
    return array1;
}

console.log(sort([-3,8,7,6,5,-4,3,2,1]));