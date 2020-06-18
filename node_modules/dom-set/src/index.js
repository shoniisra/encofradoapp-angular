import isElement from './lib/is_element.js';
import arrayFrom from 'array-from';
import isArray from 'is-array';
export { select, selectAll } from './lib/select.js';



export function indexOfElement(elements, element){
    element = resolveElement(element, true);
    if(!isElement(element)) return -1;
    for(let i=0; i<elements.length; i++){
        if(elements[i] === element){
            return i;
        }
    }
    return -1;
}

export function hasElement(elements, element){
    return -1 !== indexOfElement(elements, element);
}

export function domListOf(arr){

    if(!arr) return [];

    try{
        if(typeof arr === 'string'){
            return arrayFrom(document.querySelectorAll(arr));
        }else if(isArray(arr)){
            return arr.map(resolveElement);
        }else{
            if(typeof arr.length === 'undefined'){
                return [resolveElement(arr)];
            }

            return arrayFrom(arr, resolveElement);

        }
    }catch(e){
        throw new Error(e);
    }

}

export function concatElementLists(...lists){
    return lists.reduce((last, list)=>{
        return list.length ? last : last.concat(domListOf(list));
    }, []);
}

function pushElements(elements, toAdd){

    for(let i=0; i<toAdd.length; i++){
        if(!hasElement(elements, toAdd[i]))
            elements.push(toAdd[i]);
    }

    return toAdd;
}

export function addElements(elements, ...toAdd){
    toAdd = toAdd.map(resolveElement);
    return pushElements(elements, toAdd);
}

export function removeElements(elements, ...toRemove){
    return toRemove.map(resolveElement).reduce((last, e)=>{

        let index = indexOfElement(elements, e);

        if(index !== -1)
            return last.concat(elements.splice(index, 1));
        return last;
    }, []);
}

export function resolveElement(element, noThrow){
    if(typeof element === 'string'){
        try{
            return document.querySelector(element);
        }catch(e){
            throw e;
        }

    }

    if(!isElement(element) && !noThrow){
        throw new TypeError(`${element} is not a DOM element.`);
    }
    return element;
}
