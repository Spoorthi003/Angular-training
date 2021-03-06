function contains(mainString,subString){

    
    let index= mainString.toLowerCase().indexOf(subString.toLowerCase());
    return index>=0
}

function searchAll(list, isMatch){
    let result=[];
    for(let value of list)
        if(isMatch(value))
            result.push(value);
    return result;
}

function searchSingle(list, isMatch){
    for(let value of list)
        if(isMatch(value))
            return value;

    return null;
}

module.exports={
    searchAll,
    searchSingle,
    contains  
} ;