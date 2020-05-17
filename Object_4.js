// An array of objects
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    
function display_Status(array)
{
    var i;
    var books = [];
    for(i = 0; i<array.length;i++)
    {
        var tmpString = '';
        if(array[i].readingStatus)
        {
            tmpString += 'You have already read the book "' + array[i].title + '" by '+ array[i].author+'.';

        }else{
            tmpString += 'You still need to read the book "' + array[i].title + '" by '+ array[i].author+'.';
        }
        books.push(tmpString);
    }
    return books;
}
var result = display_Status(library);

for(var book in result)
{
    console.log(result[book]);
}