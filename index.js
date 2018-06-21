#!/usr/bin/env node

const app = require ('./build/app');

app.start(process.argv.slice(2));
