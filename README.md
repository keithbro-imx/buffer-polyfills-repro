To reproduce the issue:

```bash
$ npm run build

> esmrepro2@1.0.0 build
> node build.js

✘ [ERROR] No matching export in "node-modules-polyfills:buffer" for import "default"

    node_modules/soltypes/build/index.es.js:1:7:
      1 │ import buffer from 'buffer';
        ╵        ~~~~~~
```