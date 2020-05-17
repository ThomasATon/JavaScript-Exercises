function clone_array(array1)
{
    return array1.slice(0);
    // slice(start, end) end is exclusive
    // so 0 would start from the beginning and end after all elements


}

console.log(clone_array([1, 2, 4, 0]));
console.log(clone_array([1, 2, [4, 0]]));