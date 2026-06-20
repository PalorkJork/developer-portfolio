/**
 * Image compression script using sharp
 * Run: node scripts/compress-images.mjs
 *
 * What it does:
 * - Converts all PNG/JPG images in src/assets to WebP
 * - Resizes oversized images to a max dimension of 1920px
 * - Targets < 200KB for thumbnails, < 600KB for full images
 * - Saves compressed files alongside the originals (same name, .webp extension)
 */

import sharp from "sharp";
import { readdirSync, statSync, existsSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Folders to process
const TARGET_DIRS = [
  join(ROOT, "src/assets"),
  join(ROOT, "src/assets/design"),
];

// Quality settings
const WEBP_QUALITY = 82; // 80-85 is a great balance
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

// Profile photo gets a higher quality since it's the hero image
const PROFILE_QUALITY = 88;

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const fileName = basename(filePath);

  // Skip if WebP already exists and is newer than source
  if (existsSync(outputPath)) {
    const srcStat = statSync(filePath);
    const outStat = statSync(outputPath);
    if (outStat.mtimeMs > srcStat.mtimeMs) {
      console.log(`  ⏭  Skipping (already up-to-date): ${fileName}`);
      return;
    }
  }

  const srcSize = statSync(filePath).size;
  const isProfile =
    fileName.includes("profile") || fileName.includes("chousereyvisoth");
  const quality = isProfile ? PROFILE_QUALITY : WEBP_QUALITY;

  try {
    await sharp(filePath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: "inside",       // keeps aspect ratio, never upscales
        withoutEnlargement: true,
      })
      .webp({ quality })
      .toFile(outputPath);

    const outSize = statSync(outputPath).size;
    const saved = (((srcSize - outSize) / srcSize) * 100).toFixed(1);
    const srcKB = (srcSize / 1024).toFixed(0);
    const outKB = (outSize / 1024).toFixed(0);

    console.log(
      `  ✅ ${fileName.padEnd(40)} ${srcKB.padStart(6)}KB → ${outKB.padStart(6)}KB  (saved ${saved}%)`
    );
  } catch (err) {
    console.error(`  ❌ Failed: ${fileName} — ${err.message}`);
  }
}

async function processDirectory(dir) {
  if (!existsSync(dir)) {
    console.log(`  ⚠  Directory not found: ${dir}`);
    return;
  }

  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile()) {
      await compressImage(join(dir, entry.name));
    }
    // Don't recurse — TARGET_DIRS already lists both parent & child
  }
}

async function main() {
  console.log("\n🖼  Image Compression Script (PNG/JPG → WebP)\n");
  console.log("=".repeat(60));

  for (const dir of TARGET_DIRS) {
    const label = dir.replace(ROOT, "").replace(/\\/g, "/");
    console.log(`\n📁 Processing: ${label}`);
    await processDirectory(dir);
  }

  console.log("\n" + "=".repeat(60));
  console.log("✨ Done! Now update your imports to use .webp files.");
  console.log(
    "   Example:  import img from '../assets/design/1.webp'  (was .png)\n"
  );
}

main().catch(console.error);
