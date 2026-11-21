// Entry program for the make.fun bounty "Post a GTA 6 meme on X".
// It writes the meme image (meme.png, held in this repository) to the
// output directory as entry.png, byte for byte, so the house can read
// exactly the picture that was posted on X.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const meme = readFileSync(join(repoRoot, "meme.png"));
if (meme[0] !== 0x89 || meme[1] !== 0x50 || meme[2] !== 0x4e || meme[3] !== 0x47) {
  throw new Error("meme.png is not a PNG image");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), meme);
