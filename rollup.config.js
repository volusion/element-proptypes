import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

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
            }),
        ],
        experimentalCodeSplitting: true
    };
}

export default [standardBuilds()];
