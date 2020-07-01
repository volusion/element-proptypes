import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';

const extensions =  ['.ts', '.js'];

function standardBuilds() {
    return {
        input: ['index.ts'],
        output: [{ dir: 'lib', format: 'cjs' }, { dir: 'es', format: 'es' }],
        plugins: [
            resolve({
                extensions
              }),
            babel({
                babelHelpers: 'bundled',
                extensions
                // exclude: ['node_modules/**'],
                // plugins: ['external-helpers', 'transform-object-rest-spread'],
                // babelrc: false,
                // presets: [['env', { modules: false }]]
            }),
            // commonjs() // so rollup can convert node modules to ESM if needed
        ],
        experimentalCodeSplitting: true
    };
}

export default [standardBuilds()];
