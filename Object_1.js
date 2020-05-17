function list_obj(obj) 
{
    if(!isObject(obj)){
        return [];
    }
    if(Object.keys){
        return Object.keys(obj);
    }
    var keys = [];
    for(var key in obj){
        if(_.has(obj, key)) keys.push(key);
    }// For every key in obj, if it has an obj and key, push the key
    return keys;
}// Objects in Javascript are similar to dictionaries

function isObject(obj)
{
    var type = typeof obj;
    return type === 'object' && type !== null;

}
console.log(list_obj({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));