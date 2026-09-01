import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images');
const widths = [480, 800, 1200, 1600];
const sourceExtensions = new Set(['.jpg', '.jpeg', '.png']);

const files = await readdir(inputDir);
await mkdir(inputDir, { recursive: true });

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!sourceExtensions.has(ext) || /-\d+\.(avif|webp)$/.test(file)) {
    continue;
  }

  const input = path.join(inputDir, file);
  const name = path.basename(file, ext);
  const metadata = await sharp(input).metadata();
  const sourceWidth = metadata.width ?? 0;
  const targetWidths = widths.filter((width) => width <= sourceWidth);

  if (sourceWidth > 0 && sourceWidth < widths.at(-1) && !targetWidths.includes(sourceWidth)) {
    targetWidths.push(sourceWidth);
  }

  for (const width of targetWidths) {
    const base = path.join(inputDir, `${name}-${width}`);
    const pipeline = sharp(input).resize({ width, withoutEnlargement: true });

    await Promise.all([
      pipeline.clone().avif({ quality: 58, effort: 6 }).toFile(`${base}.avif`),
      pipeline.clone().webp({ quality: 78, effort: 5 }).toFile(`${base}.webp`),
    ]);
  }
}
