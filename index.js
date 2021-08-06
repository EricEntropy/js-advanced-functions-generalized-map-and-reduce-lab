

const map = (source, fn) => {
    const newArray = [];
    for(let i of source){
        newArray.push(fn(i))
    };
    return newArray
}

const reduce = (source, fn, initialVal) => {
    //check where to start, at initial or first array element if given initial
    let value = (!!initialVal) ? initialVal : source[0];
    let i = (!!initialVal) ? 0 : 1;

    for(; i < source.length; i++){
        value = fn(source[i], value);
    }
    return value
}