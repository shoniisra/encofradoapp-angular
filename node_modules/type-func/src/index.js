function getDef(f, d){
    if(typeof f === 'undefined'){
        return typeof d === 'undefined' ? f : d;
    }

    return f;
}
export function boolean(func, def){

    func = getDef(func, def);

    if(typeof func === 'function'){
        return function f(...args){return !!func.apply(this, args)};
    }

    return !!func ? function(){return true} : function(){return false};
}

export function integer(func, def){

    func = getDef(func, def);

    if(typeof func === 'function'){
        return function f(...args){
            let n = parseInt(func.apply(this, args), 10);
            return (n != n) ? 0 : n;
        };
    }

    func = parseInt(func, 10);

    return (func != func) ? function(){return 0} : function(){return func};
}

export function string(func, def){

    func = getDef(func, def);

    if(typeof func === 'function'){
        return function f(...args){ return ''+func.apply(this, args) };
    }

    func = ''+func;

    return function(){return func};
}
