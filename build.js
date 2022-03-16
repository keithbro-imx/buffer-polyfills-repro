const NodeModulesPolyfills = require('@esbuild-plugins/node-modules-polyfill').default

require('esbuild').build({
    entryPoints: ['src/index.js'],
    bundle: true,
    plugins: [NodeModulesPolyfills()],
    outfile: 'out.js',
}).catch(() => process.exit(1))