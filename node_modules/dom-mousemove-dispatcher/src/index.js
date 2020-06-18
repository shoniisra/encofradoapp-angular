import objectCreate from './create';

const mouseEventProps = [
    'altKey',
    'button',
    'buttons',
    'clientX',
    'clientY',
    'ctrlKey',
    'metaKey',
    'movementX',
    'movementY',
    'offsetX',
    'offsetY',
    'pageX',
    'pageY',
    'region',
    'relatedTarget',
    'screenX',
    'screenY',
    'shiftKey',
    'which',
    'x',
    'y'
];

export default function createDispatcher(element){

    let defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
    };

    if(element !== undefined){
        element.addEventListener('mousemove', onMove);
    }

    function onMove(e){
        for(let i=0; i<mouseEventProps.length; i++){
            defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
    }

    const dispatch = (()=>{
        if(MouseEvent){
            return function m1(element, initMove, data){
                let evt = new MouseEvent(
                    'mousemove',
                    createMoveInit(defaultSettings, initMove)
                );

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        }else if(typeof document.createEvent === 'function'){
            return function m2(element, initMove, data){
                let settings = createMoveInit(defaultSettings, initMove);
                let evt = document.createEvent('MouseEvents');

                evt.initMouseEvent(
                    "mousemove",
                    true,   //can bubble
                    true,   //cancelable
                    window, //view
                    0,      //detail
                    settings.screenX,           //0, //screenX
                    settings.screenY,           //0, //screenY
                    settings.clientX,           //80, //clientX
                    settings.clientY,           //20, //clientY
                    settings.ctrlKey,           //false, //ctrlKey
                    settings.altKey,            //false, //altKey
                    settings.shiftKey,          //false, //shiftKey
                    settings.metaKey,           //false, //metaKey
                    settings.button,            //0, //button
                    settings.relatedTarget      //null //relatedTarget
                );

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        }else if(typeof document.createEventObject === 'function'){
            return function m3(element, initMove, data){
                let evt = document.createEventObject();
                let settings = createMoveInit(defaultSettings, initMove);
                for(let name in settings){
                    evt[name] = settings[name];
                }

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        }
    })();

    function destroy(){
        if(element)
            element.removeEventListener('mousemove', onMove, false);
        defaultSettings = null;
    }

    return {
        destroy,
        dispatch
    };
}



function createMoveInit(defaultSettings, initMove){
    initMove = initMove || {};
    let settings = objectCreate(defaultSettings);
    for(let i=0; i<mouseEventProps.length; i++){
        if(initMove[mouseEventProps[i]] !== undefined)
            settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
    }

    return settings;
}

function setSpecial(e, data){
    console.log('data ',data)
    e.data = data || {};
    e.dispatched = 'mousemove';
}

/*
http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
*/
