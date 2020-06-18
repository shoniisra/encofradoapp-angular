import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
//let pack = require('../package.json');
//let external = Object.keys(pack.dependencies || {});

export default {
  entry: 'src.js',
  moduleName: 'testing',
  plugins: [
      nodeResolve({
          jsnext: true,
          main: true,
          module: true
      }),
      babel(),
      commonjs({
          //include: '../node_modules/iselement',
          //namedExports: {'../node_modules/iselement/'}
      })
  ],
  targets: [
    {
      dest: 'code.js',
      format: 'iife',
      sourceMap: 'inline'
    }
  ]
};
/*export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [ babel() ],
  dest: 'dist/bundle.js' // equivalent to --output
};*/
