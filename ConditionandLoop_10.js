function print_stars()
{
    var i, j; 

    for(i = 0; i <= 5; i++)
    {
        for(j = 0; j < i; j++)
        {
        process.stdout.write('* ');
        }
        console.log();
    }
}
print_stars();