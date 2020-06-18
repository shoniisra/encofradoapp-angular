create-point-cb
===============

Install
-------

`npm install --save create-point-cb`

Usage
-----

```javascript
var createPointCB = require('create-point-cb'),
    myPoint = {},
    pointCB = createPointCB(myPoint);

window.addEventListener('mousemove', pointCB, false);
window.addEventListener('touchmove', pointCB, false);
```

About
-----

Any object you pass to `createPointCB` will get these properties:

-	x (the document window x coordinate)
-	y (the document window y coordinate)
-	target (the current event.target)
-	element (this value inside the event callback)
-	pageX (the event.pageX value)
-	pageY (thie event.pageY value)
-	type (the event.type)

Use `create-point-cb` with any DOM event that will have `clientX`, or `clientY` properties. This usually would be **mousemove**, or the **touchmove** event on the `window` object.

Happy coding. :)
