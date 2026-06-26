import sharp from "sharp";
import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join } from "node:path";

const dir = "screenshots";

const files = await readdir(dir);
const pngs = files.filter((f) => f.endsWith(".png"));

console.log(`Compressing ${pngs.length} PNGs in ${dir}/...\n`);

for (const f of pngs) {
  const src = join(dir, f);
  const tmp = src + ".tmp";
  const before = (await stat(src)).size;
  await sharp(src)
    .png({ compressionLevel: 9, quality: 95 })
    .toFile(tmp);
  await unlink(src);
  await rename(tmp, src);
  const after = (await stat(src)).size;
  const pct = before > after
    ? `-${(((before - after) / before) * 100).toFixed(1)}%`
    : "+0%";
  console.log(
    `${f}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (${pct})`
  );
}

console.log("\nDone.");
