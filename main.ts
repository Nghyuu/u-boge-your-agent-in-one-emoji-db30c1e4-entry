// Your Agent in One Emoji — u-boge-your-agent-in-one-emoji-db30c1e4
// Writes a single emoji (plus one trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// The agent's signature behaviour: it loops — perceive, plan, act, observe,
// repeat — until the job is done. One glyph, no caption, no explanation.
const emoji = "🔁";
if ([...emoji].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, emoji + "\n", "utf8");
chmodSync(entryPath, 0o644);
