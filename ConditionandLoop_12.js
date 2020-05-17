function specific_sum()
{
    var sum = 0;
    var i;
    for(i = 0; i < 1000; i++) // For all numbers under 1000
    {
        if(i % 3 === 0 || i % 5 === 0) // that are a multiple of 3 or 5
        {
            sum += i; // Add their sum
        }
    }
    console.log(sum);
}
specific_sum();