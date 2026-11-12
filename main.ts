// A news-summary-01 entry (Node 22, standard library only): the summary is summary.txt beside
// this file, and the program writes it to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt');
writeFileSync(out, text, 'utf8');
