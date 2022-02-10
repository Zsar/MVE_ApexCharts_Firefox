This issue appears in Firefox
- "91.3"
- 91.5.1esr (64-Bit)
- 91.6.0esr (64-Bit)

The markers on the chart
- have the wrong order
- are not all on the top layer

Behaviour is as expected in Chrome 98.0.4758.82 (Official Build) (64-bit).

## How to use

1. Checkout this repository.
2. Change directories so you are inside the project folder.
2. The first time you do this, you'll need to run `npm install` so that you have Typescript set up.
2. `npm run build` will compile the TypeScript source files.
3. `npm start` will start your server on port 3000.
4. <kbd>Ctrl</kbd>+<kbd>c</kbd> to shut off the server.

## Credit

The toy server used in this example, including build chain and directory structure, is forked from the excellent https://github.com/aleph-naught2tog/ts_without_dependencies .
