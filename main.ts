// news-summary-01 entry (Node 22): copy summary.txt to /output/entry.txt
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), text, 'utf8');