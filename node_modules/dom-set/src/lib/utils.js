import {WeakMap as InternalWeakMap} from 'weakmap';

export function createPrivates(){
    return new InternalWeakMap();
}

export const arrayFrom = (function(){
    if(Array.from){
        return Array.from;
    }
    return (a, mapper, thisArg)=>{
        if(typeof mapper === 'function'){
            return Array.prototype.slice.call(a).map(mapper, thisArg);
        }else{
            return Array.prototype.slice.call(a);
        }
    };
}());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
export const internalIsNaN = (function(){
    return Number.isNaN ? Number.isNaN : (value)=>{
        return value !== value;
    };
}());
