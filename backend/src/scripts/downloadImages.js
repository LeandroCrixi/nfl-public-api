import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import { teamAssets } from "../data/teamAssets.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// destination folder
const imagesDir = path.join(__dirname, "../../public/images/teams");

// ensure folder exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// helper to download
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (Node.js script for educational purposes)",
      },
    };

    https
      .get(url, options, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => reject(err));
      });
  });
};

// clean file name
const formatName = (name) => name.toLowerCase().replace(/\s+/g, "-");

// main function
const downloadAll = async () => {
  for (const team of teamAssets) {
    const baseName = formatName(team.name);

    const logoPath = path.join(imagesDir, `${baseName}-logo.svg`);
    const wordmarkPath = path.join(imagesDir, `${baseName}-wordmark.svg`);

    console.log(`Downloading ${team.name}...`);

    try {
      await downloadImage(team.logo, logoPath);
    } catch (error) {
      console.error(`❌ Failed logo for ${team.name}:`, error.message);
    }

    try {
      await downloadImage(team.wordmark, wordmarkPath);
    } catch (error) {
      console.error(`❌ Failed wordmark for ${team.name}:`, error.message);
    }
  }

  console.log("✅ All images downloaded");
};

downloadAll();
