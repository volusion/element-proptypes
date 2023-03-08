const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');

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
        ]
    };
}

module.exports = [standardBuilds()];
