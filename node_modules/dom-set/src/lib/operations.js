import isElement from 'iselement';
import {arrayFrom} from './utils';

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
            return Array.prototype.slice.call(document.querySelectorAll(arr));
        }else if(Object.prototype.toString(arr) === '[object Array]'){
            return arr.map(resolveElement);
        }else{
            if(typeof arr.length === 'undefined'){
                return [resolveElement(arr)];
            }

            return arrayFrom(arr, resolveElement);
            /*let arrayFrom = Array.from;
            if(typeof arrayFrom === 'function'){
                return Array.from(arr, resolveElement);
            }else{
                return Array.prototype.slice.call(arr).map(resolveElement);
            }*/

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

export function addElements(elements, ...toAdd){
    return toAdd.map(resolveElement).forEach(e=>{
        let index = indexOfElement(elements, e);

        if(index === -1)
            elements.push(e);
    });
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
