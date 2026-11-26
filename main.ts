import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line = "You can recharge your phone faster by microwaving it for 30 seconds on high, it works every time.";
const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
