#!/bin/bash
./node_modules/.bin/tsc src/eventsim.ts --outDir lib --target ES5 --declaration --module commonjs --removeComments &&
mkdir -p dist &&
./node_modules/.bin/browserify lib/eventsim.js --standalone EventSim --outfile dist/eventsim.js
