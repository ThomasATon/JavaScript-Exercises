function max_of_Num(x, y)
{
    if((x >= 40 && x <= 60) && ( y >= 40 && y <= 60))
    {
        if (x === y) // == is arbitrary comparison(type can be diff) and === is strict comparison
        {
            return "Numbers are the same";
        }else if(x > y)
        {
            return x;
        }else{
            return y;
        }
    
    }else{
        return "Numbers are not in the range 40 and 60"
    }
}
console.log(max_of_Num(45,60));
console.log(max_of_Num(25,60));
console.log(max_of_Num(45,80));