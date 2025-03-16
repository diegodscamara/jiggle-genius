#!/usr/bin/env node

const semver = require('semver');
const { engines } = require('../package.json');

const version = engines.node;
const nodeVersion = process.version;

if (!semver.satisfies(nodeVersion, version)) {
  console.error('\x1b[31m%s\x1b[0m', `Error: Jiggle Genius requires Node.js ${version}`);
  console.error('\x1b[33m%s\x1b[0m', `You are using Node.js ${nodeVersion}`);
  console.error('\x1b[36m%s\x1b[0m', '\nTo install the correct version using nvm:');
  console.error('\x1b[37m%s\x1b[0m', '  nvm install 18');
  console.error('\x1b[37m%s\x1b[0m', '  nvm use 18');
  console.error('\x1b[36m%s\x1b[0m', '\nOr visit https://nodejs.org/ to download Node.js v18\n');
  process.exit(1);
} 