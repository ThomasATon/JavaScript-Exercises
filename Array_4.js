function last_el(array1, n)
{
    if(n == null)
    {
        return array1[array1.length-1];
    }
    else{
        return array1.slice(Math.max(array1.length - n, 0));
        // n = 3 would mean length(4) - 3 = 1, so slice(1) means print [9, 0, -2]
        //  Which is the last 3 of the array
        // array1.length - n means the last n elements of the array
    }
}
console.log(last_el([7, 9, 0, -2]));
console.log(last_el([7, 9, 0, -2], 3));
console.log(last_el([7, 9, 0, -2], 6));
