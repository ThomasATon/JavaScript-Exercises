function longest_word(str)
{
    parts = str.match(/\w[a-z]{0,}/gi); // Match with this input splits the string on non alphebetical characters(space)
    long_word = parts[0];

    for(var i =0; i < parts.length; i++)
    {
        if(parts[i].length > long_word.length){
            long_word = parts[i];
        }
    }
    console.log(long_word);
}

test_string = 'Web Development Tutorial';
longest_word(test_string)
