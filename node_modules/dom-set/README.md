Install
-------

`npm install --save dom-indexers`

The Explanation
---------------

This library is best used with [rollup](https://github.com/rollup/rollup).

`dom-set` is a collection of functions to extend other libraries that export instances of objects that have their own DOM operations.

There actually aren't any dom operations being done by this library. Only array collection operations that are meant for an array of DOM elements.

Usage
-----

```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <p class="thing1"></p>
    <p class="thing2"></p>
    <p class="thing3"></p>

    <script src="code.js"></script>
</body>
</html>
```

**code.js** precompiled.

```javascript
import {domListOf, addElements, removeElements} from 'dom-set';

function MyOperator(elements){
    this.elements = domListOf(elements);
}

MyOperator.prototype.add = function(elements){
    addElements(this.elements, elements);
    return this;
};
MyOperator.prototype.remove = function(elements){
    return removeElements(this.elements, elements);
};
//All operations can take elements, or selectors.
const things = [document.querySelector('.thing1'), '.thing2'];
const myOps = MyOperator(things);
myOps.add(document.querySelector('.thing3'));
myOps.remove('.thing1');

```

Selector imports
----------------

### select(selector|element)

Select an element with `selector`, or just return `element`.

### selectAll(selector|array)

Select all elements using `selector`, select one element for each selector in `array`.

If `array` has any elements in it those get returned unmodified.

List imports
------------

-	indexOfElement(array, element)
-	hasElement(array, element)
-	domListOf(array)
-	addElements(array, ...elements)
-	removeElements(array, ...elements)

The first argument of `array` should be the javascript array that contains the elements you want to operate on.

In this documentation any where you see the words **element**, **convertible**, or **convertible value** this means the value is one of these types:

-	CSS DOM selector
-	DOM element

### indexOfElement(array, element) -> Integer

Find the index of element in the array. `indexOfElement` returns `-1` if the element is not in `array`. `element` is a convertible.

### hasElement(array, element) -> Boolean

Check if `array` contains `element`.

### domListOf(array|string) -> Array

Create an Array of elements from another array, or array like list.

The array values can be convertible values.

The string value must be a CSS selector.

### addElements(array, ...elements) -> added

Add elements to an array of elements. `elements` can be convertible values.

### removeElements(array, ...elements) -> removed

Remove elements from the array of elements. `elements` can be convertible values.

About
-----

These functions aren't meant to manipulate the DOM. They're only purpose is to manage a list of DOM elements.
