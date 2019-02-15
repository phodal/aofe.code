import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/widget-quotes.bundle.js',
        format: 'system'
    },
    plugins: [
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        typescript({
            typescript: require('typescript')
        }),
        commonjs()
    ],
    external: [
        'plugins-core',
        '@angular/core',
        '@angular/common',
        '@angular/common/http',
        'rxjs/Observable'
    ]
}