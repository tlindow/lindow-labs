import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "public", "brand");

const variants = [
  { src: "stacked-l.svg",            name: "stacked-l" },
  { src: "stacked-l-mono.svg",       name: "stacked-l-mono" },
  { src: "stacked-l-mono-light.svg", name: "stacked-l-mono-light" },
];

const sizes = [1024, 512, 300];

for (const v of variants) {
  const svg = await fs.readFile(path.join(root, v.src));
  for (const size of sizes) {
    const out = path.join(root, `${v.name}-${size}.png`);
    await sharp(svg, { density: 600 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out);
    console.log("wrote", path.relative(root, out));
  }
}

// LinkedIn-ready square: color mark on warm cream background, full-bleed
{
  const svg = await fs.readFile(path.join(root, "stacked-l.svg"));
  const out = path.join(root, "stacked-l-linkedin-1024.png");
  // Render the mark transparent, then composite over background
  const markPng = await sharp(svg, { density: 600 })
    .resize(720, 720, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: 1024,
      height: 1024,
      channels: 4,
      background: { r: 255, g: 253, b: 247, alpha: 1 },
    },
  })
    .composite([{ input: markPng, gravity: "center" }])
    .png()
    .toFile(out);
  console.log("wrote", path.relative(root, out));
}
