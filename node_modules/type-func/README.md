Install
-------

`npm install --save type-func`

About
-----


This is a collection of functions that return functions that return certain types of values.

The signature is:

```javascript
typeFunc(func|value, default|undefined)
```

`typeFunc` is one of these types.

-	`boolean(func|boolean, default|undefined) -> fn(...args)`
-	`integer(func|integer, default|undefined) -> fn(...args)`
-	`string(func|string, default|undefined) -> fn(...args)`

The `fn` function returned by one of the above type functions returns the value of that type.

Example:

```javascript
import { boolean } from 'type-func';
let bool1 = boolean(true);

let bool2 = boolean(()=>false);

```

The variables bool1, and bool2 in the above example are functions that return a boolean.

All returned types are converted from the input to the respective type.

Example:

```javascript
import { boolean } from 'type-func';
let zero1 = boolean(0);
console.log(zero1());// prints false
let zero2 = boolean(()=>0);
console.log(zero2());// also prints false
```

When `undefined` is passed a default value is used. If there is no default value set then `undefined` will be converted as needed.

```javascript
import { boolean } from 'type-func';

let defaultToFalse = boolean(undefined, false)
console.log(defaultToFalse());// prints false
let undef = boolean(undefined);
console.log(undef()); // prints false
```

What's this good for?
---------------------

Default options. Examples:

```javascript
import { boolean } from 'type-func';

function myClass(options){
    this.opt = boolean(options.opt, false);
}
```

```javascript
import { boolean } from 'type-func';

function myClass({opt: opt} = {opt: false}){
    this.opt = boolean(options.opt);
}
```

```javascript
import { boolean } from 'type-func';

function myClass(opt = boolean(true)){
    this.opt = boolean(opt);
}
```

About
-----

Just some helper functions that return consistent types.
