#!/usr/bin/env node
/**
 * Generates site/data/facts.json from the compiled package output.
 *
 * The GitHub Pages site treats the built npm package as the single source of
 * truth for fact data instead of maintaining a second copy — this script
 * runs as part of the Pages build (see .github/workflows/pages.yml) right
 * after `npm run build`, so the published site can never drift from
 * src/snappleFacts.ts.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist', 'snappleFacts.js');
const outputDir = path.join(__dirname, '..', 'site', 'data');
const outputPath = path.join(outputDir, 'facts.json');

if (!fs.existsSync(distPath)) {
  console.error(`Could not find ${distPath}. Run "npm run build" first.`);
  process.exit(1);
}

const facts = require(distPath).default;

if (!Array.isArray(facts) || facts.length === 0) {
  console.error('Loaded facts list is empty or not an array — refusing to write an empty facts.json.');
  process.exit(1);
}

const sorted = [...facts].sort((a, b) => a.number - b.number);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(sorted), 'utf8');

console.log(`Wrote ${sorted.length} facts to ${path.relative(process.cwd(), outputPath)}`);
