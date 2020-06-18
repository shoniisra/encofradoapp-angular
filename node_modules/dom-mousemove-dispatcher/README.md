Install
-------

`npm install --save dom-mousemove-dispatcher`

Use rollup, browserify, or some other compiler to use this library.

Example
-------

```javascript
import mouseMoveDispatcher from 'dom-mousemove-dispatcher';

const dispatcher = mouseMoveDispatcher(window);

let div = document.querySelector('div')

div.addEventListener('mousemove', (e)=>{
    //This event might have been dispatched by the dispatcher.
    console.log(
        'mouse moving dispatched = ',e.dispatched,
        ' event =', e,
        ' data =', e.data
    );
});

div.addEventListener('mousemove', (e)=>{
    if(e.data === 'myEvent'){
        //The event was dispatched from this listener.
        //To prevent infinite recursion don't refire until the next turn in the event loop.
        e.stopPropagation();
        return;
    }
    //Re-dispatch this event.
    dispatcher.dispatch(div, e, 'myEvent');
});

//Dispatch an event with a clientX property.
setTimeout(()=>dispatcher.dispatch(div, {clientX: 500}), 1000);

```

The Event Object
----------------

The event object you get from firing a mousemove with `dom-mousemove-dispatcher` has additional properties set on it. These are:

-	event.dispatched = "mousemove"
-	event.data = Your data

### mouseMoveDispatcher(object) -> dispatcher

Create a `mousemove` dispatcher that uses `object` to set the default properties on move.

`object` can be anything that can have `mousemove` set through it's `addEventListener` method (window, body, p, div, ...).

### dispatcher.dispatch(element, eventProps, data|undefined) -> cancelled

Dispatch a `mousemove` event.

`element` is the DOM element you wish to fire the mousemove on.

`eventProps` are the properties you want to add to the event.

The optional `data` parameter is an arbitrary javascript value that will be set on a data property on the `mousemove` event object.

### dispatcher.destroy() -> undefined

Cleanup the dispatcher object events, and properties.

About
-----

`dom-mousemove-dispatcher` is a [ponyfill](https://ponyfoo.com/articles/polyfills-or-ponyfills) for `mousemove` event dispatch that is optimized for quick firing of `mousemove`.

Please report any bugs you find.
