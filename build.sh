#!/bin/bash
mkdir -p temp &&
./node_modules/.bin/tsc src/eventsim.ts --outDir temp --target ES5 --declaration --module commonjs --removeComments &&
mkdir -p dist &&
./node_modules/.bin/browserify temp/eventsim.js --standalone EventSim --outfile dist/eventsim.js &&
cp temp/eventsim.d.ts dist/eventsim.d.ts
#cat src/DOMEventsLevel3.shim.min.js >> dist/eventsim.js
