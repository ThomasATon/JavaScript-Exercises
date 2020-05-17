function removeDups(array1)
{
    var tmp = [];
    var i,j;
    tmp.push(array1[0]);
    for(i = 0; i<array1.length; i++)
    {
        for(j = 0; j<array1.length; j++)
        {
            if(tmp.includes(array1[j])){
                continue;
            }
            else{
                tmp.push(array1[j]);
            }
        }
    }
    return tmp;
}
console.log(removeDups([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));