import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outputFile = join(outDir, "entry.txt");
writeFileSync(outputFile, "You will inherit a legacy codebase, no comments, and the title of archaeologist.\n");
chmodSync(outputFile, 0o644);
