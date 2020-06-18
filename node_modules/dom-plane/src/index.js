import createPointCB from 'create-point-cb';

export { createPointCB };

function createWindowRect(){
    let props = {
        top: {value: 0, enumerable: true},
        left: {value: 0, enumerable: true},
        right: {value: window.innerWidth, enumerable: true},
        bottom: {value: window.innerHeight, enumerable: true},
        width: {value: window.innerWidth, enumerable: true},
        height: {value: window.innerHeight, enumerable: true},
        x: {value: 0, enumerable: true},
        y: {value: 0, enumerable: true}
    };

    if(Object.create){
        return Object.create({}, props);
    }else{
        let rect = {};
        Object.defineProperties(rect, props);
        return rect;
    }
}

export function getClientRect(el){
    if(el === window){
        return createWindowRect();
    }else{
        try{
            let rect = el.getBoundingClientRect();
            if(rect.x === undefined){
                rect.x = rect.left;
                rect.y = rect.top;
            }
            return rect;
        }catch(e){
            throw new TypeError("Can't call getBoundingClientRect on "+el);
        }

    }
}

export function pointInside(point, el){
    let rect = getClientRect(el);
    return (point.y > rect.top && point.y < rect.bottom &&
            point.x > rect.left && point.x < rect.right);
}
