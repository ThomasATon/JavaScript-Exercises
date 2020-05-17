function bubbleSort(array)
{
    var i,j;
    for(i = 0; i<array.length; i++)
    {
        for(j = 0; j<array.length; j++)
        {
            if(array[j] > array[j+1])
            {
                var tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([6,4,0, 3,-2,1]));