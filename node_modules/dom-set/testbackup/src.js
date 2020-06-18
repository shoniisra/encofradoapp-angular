import {createAdder, createRemover} from '../';

let elements = [];
let obj = {
    getElements: function(){
        return elements;
    }
};
obj.add = createAdder(elements);
obj.remove = createRemover(elements);
console.log(obj.add(document.querySelector('.thing1')));
console.log(obj.add(document.querySelector('.thing2')));

console.log('elements ', elements);
console.log('removed ', obj.remove('.thing1'));
console.log('elements ', elements);
