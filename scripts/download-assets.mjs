import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  "https://framerusercontent.com/images/7Atm17igtkkWneJVBN6w9hNA.jpg",
  "https://framerusercontent.com/images/3wQvavMUU2U4aZWzXpnaOMKTk.png?scale-down-to=1024&width=1638&height=2048",
  "https://framerusercontent.com/images/8QaEzkH3al1VXTQOg6S3sb59Ds.png?width=336&height=240",
  "https://framerusercontent.com/images/BEBqqgXWzgk81RxJymJsauHpzfQ.png?scale-down-to=1024&width=1638&height=2048",
  "https://framerusercontent.com/images/vgU8Y19NaR4NFxxBE20E9yUCKU.png?width=189&height=120",
  "https://framerusercontent.com/images/yeO7MoRbw8CJp7TYJPwGXxMks.webp",
  "https://framerusercontent.com/images/iGKphlm8HseMME7QkR9mTdKn8Eo.png",
  "https://framerusercontent.com/images/8iZ8sf0ktJqic0zfQpV9u2Dmzs.webp",
  "https://framerusercontent.com/images/sfMIWlpkK0Zhh3haE9L5VwUFlkQ.svg",
  "https://framerusercontent.com/images/yC32JnAcjhM6f0qPGQ0ihpaBh4s.webp",
  "https://framerusercontent.com/images/e8ZYggQjLbJ4rp8z9GW8sPmGoY.svg",
  "https://framerusercontent.com/images/WsSkPraNX13jwePA9A2UwTIpA.webp",
  "https://framerusercontent.com/images/KannOww5Fmrj28sS2h4Gck6jU.svg",
  "https://framerusercontent.com/images/zp1lKEcH4Cmnt4mhKqnDoQ.webp",
  "https://framerusercontent.com/images/HUMMmrmal8bbwGjCIw14YPNIiI.svg",
  "https://framerusercontent.com/images/2eLKuJq4s9vnszwjU3gwaskLWQc.webp",
  "https://framerusercontent.com/images/4FLTJODJ9XqJfbVX3PO2SkeU1yk.svg",
  "https://framerusercontent.com/images/qfYhxJebB4ihAdcHYpX2YUkUw.jpg",
  "https://framerusercontent.com/images/2AqaAHvwIezWXRuW25bbGKXmIDM.jpg",
  "https://framerusercontent.com/images/GoksaJrRRKqoPKnX2UonHDeAFFM.webp?scale-down-to=512",
  "https://framerusercontent.com/images/3pTpFxYU2ltvKDCE74f6COZFqw.png",
  "https://framerusercontent.com/images/bEpZzz6yzB4mNbRd8UGiZBW3EXg.webp",
  "https://framerusercontent.com/images/MDpwKJSX3cJqX5fHBsIqfrCep4.png",
  "https://framerusercontent.com/images/6SUQSo2aBIdazxCIGsq61PrqsQ.webp",
  "https://framerusercontent.com/images/3goaTseZXGyHudeioGh4KRK3M.webp",
  "https://framerusercontent.com/images/2o2BINQxl2OHZyLx1EJH1kVlI.webp",
  "https://framerusercontent.com/images/k2PpaxGWpNxw9VeOlTVFrGELrVo.png",
  "https://framerusercontent.com/images/9L4do3ndgkPRwKPYggsK1aKeDX0.png",
  "https://framerusercontent.com/images/EgHp8jSYRu2QhW5duuSxu5siSU.webp",
  "https://framerusercontent.com/images/vLoyC9IgMbRLLABOZ086cnbpphc.png?width=2048&height=2048",
  "https://framerusercontent.com/images/al4REw2eJHzIpWJvDNe1TZjiEQ.png",
  "https://framerusercontent.com/images/OrHH4rrZ7pmJj87ogLBQ0hXSFM.png",
  "https://framerusercontent.com/images/nbkUO7qIkqYTI6iHvLT2yz8FiQE.png",
  "https://framerusercontent.com/images/34Cg7yHqWYkOgRXniBtd3sAttE.png",
  "https://framerusercontent.com/images/lmfOQvhKMTNlcx2Pgusi4NxOAY.png",
  "https://framerusercontent.com/images/kD3yPLiNtFBGruDwgJjr3vPAcw.png?width=360&height=360",
  "https://framerusercontent.com/images/vVqUVjcG8lKrVCV57m2aYk3Vag.jpg?scale-down-to=2048&width=3687&height=5530",
  "https://framerusercontent.com/images/FZNiZVuBQmUN7ngfEtwKTwqqZ4g.jpeg?scale-down-to=1024&width=3788&height=5676",
  "https://framerusercontent.com/images/9fz1gDfzQlvt4exg4QbNKBXEpHM.jpg?scale-down-to=512&width=4268&height=3856",
  "https://framerusercontent.com/images/CUkVefGWcwenlH0bmNzKYVvYA.webp?scale-down-to=1024&width=5600&height=7008",
  "https://framerusercontent.com/images/kaQE29BQxwPP3QYwNrmGThU1Rg.webp?scale-down-to=512&width=5760&height=3840",
  "https://framerusercontent.com/images/U30R45jgf2cFFKhUakkHKXP8suI.webp?scale-down-to=1024&width=4505&height=6307",
  "https://framerusercontent.com/images/wcMedsCrsP9uHDpRIRjzH5DbUQ.webp?scale-down-to=1024&width=2004&height=3006",
  "https://framerusercontent.com/images/Cp87bn2WEcrmW38tfiXnm7oWvI.png?width=3240&height=2448",
  "https://framerusercontent.com/images/0itmTTuvSAxgYQhh7L4rA2OywI8.webp"
];

const uniqueAssets = [...new Set(assets)];
const outputDir = path.join(process.cwd(), "public", "images", "nickhaasmann");

function extensionFromUrl(url) {
  const pathname = new URL(url).pathname;
  return path.extname(pathname) || ".bin";
}

function filenameFor(url, index) {
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 8);
  return `asset-${String(index + 1).padStart(2, "0")}-${hash}${extensionFromUrl(url)}`;
}

await mkdir(outputDir, { recursive: true });

const manifest = [];

for (let i = 0; i < uniqueAssets.length; i += 4) {
  const batch = uniqueAssets.slice(i, i + 4);
  const results = await Promise.all(batch.map(async (url, offset) => {
    const index = i + offset;
    const filename = filenameFor(url, index);
    const destination = path.join(outputDir, filename);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download ${url}: ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(destination, buffer);

    return {
      url,
      path: `/images/nickhaasmann/${filename}`,
      bytes: buffer.byteLength,
    };
  }));

  manifest.push(...results);
}

await writeFile(
  path.join(outputDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
);

console.log(`Downloaded ${manifest.length} assets to ${outputDir}`);
