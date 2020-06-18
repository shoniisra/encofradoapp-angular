"use strict";
//import babel from 'rollup-plugin-babel';
//const babel = require('rollup-plugin-babel');
const rollup = require('rollup');
const buble = require('rollup-plugin-buble');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const writeFile = require('fs').writeFile;
const UglifyJS = require('uglify-js');
const pack = require('./package.json');
const external = Object.keys(pack.dependencies || {});

rollup.rollup({
    entry: 'src/index.js',
    plugins: [buble()],
    external: external
}).then((bundle)=>{
    bundle.write({
        dest: 'dist/bundle.js',
        format: 'cjs',
        moduleName: 'dom-set',
        sourceMap: true
    });

    bundle.write({
        dest: 'dist/bundle.es.js',
        format: 'es',
        sourceMap: true
    });
}).catch(onErrorCB('bundle'));



rollup.rollup({
    entry: 'src/index.js',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs(),
        buble()
    ],
}).then((bundle)=>{
    let b = bundle.write({
        dest: 'dist/dom-set.js',
        format: 'iife',
        sourceMap: true,
        moduleName: 'domSet'
    });

    b.then(what=>{

        try{
            var result = UglifyJS.minify('dist/dom-set.js');
            //console.log('result ',result)
            writeFile('dist/dom-set.min.js', result.code, onErrorCB('minify'));
        }catch(e){
            console.log('minify error ', e)
        }

    })
}).catch(onErrorCB('script sources'));

rollup.rollup({
    entry: 'test/src.js',
    plugins: [
        nodeResolve({
            main: true
        }),
        commonjs(),
        buble()
    ]
}).then(bundle=>{
    //console.log('what')
    bundle.write({
        dest: 'test/code.js',
        format: 'iife',
        sourceMap: true,
        moduleName: 'domSet'
    });
}).catch(onErrorCB('test code'));

function onErrorCB(message){
    return function(e){
        if(e){
            if(message)
                console.log(message);
            console.log(e);
            console.log(e.stack);
        }
    };
}
