import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import { writeFileSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, "../public/IMG_0596.jpeg");
const outputPath = join(__dirname, "../public/profile.png");

const imageBuffer = readFileSync(inputPath);
const inputBlob = new Blob([imageBuffer], { type: "image/jpeg" });
const blob = await removeBackground(inputBlob);
const arrayBuffer = await blob.arrayBuffer();
let buffer = Buffer.from(arrayBuffer);
// Resize and optimize for web (displays at ~160px)
buffer = await sharp(buffer)
  .resize(320, 320, { fit: "inside" })
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(outputPath, buffer);
console.log("Saved:", outputPath);
