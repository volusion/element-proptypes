import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

function standardBuilds() {
    return {
        input: ['index.js'],
        output: [{ dir: 'lib', format: 'cjs' }, { dir: 'es', format: 'es' }],
        plugins: [
            babel({
                exclude: ['node_modules/**'],
                plugins: ['external-helpers']
            }),
            commonjs() // so rollup can convert node modules to ESM if needed
        ],
        experimentalCodeSplitting: true
    };
}

export default [standardBuilds()];
