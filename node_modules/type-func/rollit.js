"use strict";
//import babel from 'rollup-plugin-babel';
const babel = require('rollup-plugin-babel');
const rollup = require('rollup');
const pack = require('./package.json');
const external = Object.keys(pack.dependencies || {});

rollup.rollup({
    entry: 'src/index.js',
    plugins: [babel()],
    external: external
}).then((bundle)=>{
    bundle.write({
        dest: 'dist/bundle.js',
        format: 'cjs',
        moduleName: 'type-func',
        sourceMap: true
    });

    bundle.write({
        dest: 'dist/bundle.es.js',
        format: 'es',
        sourceMap: true
    });
});


function onError(e){
    if(e) console.log(e);
}
