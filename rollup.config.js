import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

function standardBuilds() {
    const globals = {
        '@volusion/element-components': 'Components'
    }

    return {
        input: ['index.js'],
        output: [{ dir: 'lib', format: 'cjs', globals }, { dir: 'es', format: 'es', globals }],
        external: ['@volusion/element-components'],
        plugins: [
            babel({
                exclude: ['node_modules/**'],
                plugins: ['external-helpers', 'transform-object-rest-spread'],
                babelrc: false,
                presets: [['env', { modules: false }]]
            }),
            commonjs() // so rollup can convert node modules to ESM if needed
        ],
        experimentalCodeSplitting: true
    };
}

export default [standardBuilds()];
