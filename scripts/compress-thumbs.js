const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');

const targets = [
  { src: 'works/metamong-playground/01.png',                          dest: 'works/metamong-playground/thumb.webp' },
  { src: 'works/ploom-mobile-popup/01.png',                           dest: 'works/ploom-mobile-popup/thumb.webp' },
  { src: 'works/stella-artois-perfect-serve/01.png',                  dest: 'works/stella-artois-perfect-serve/thumb.webp' },
  { src: 'works/olive-young-awards-2025/hongdae/01.png',              dest: 'works/olive-young-awards-2025/thumb.webp' },
  { src: 'works/color-in-music-festival/01.png',                      dest: 'works/color-in-music-festival/thumb.webp' },
  { src: 'works/haruae-03/01.png',                                    dest: 'works/haruae-03/thumb1.webp' },
  { src: 'works/haruae-03/02.png',                                    dest: 'works/haruae-03/thumb2.webp' },
  { src: 'works/haruae-02/01.png',                                    dest: 'works/haruae-02/thumb.webp' },
  { src: 'works/haruae-01/01.png',                                    dest: 'works/haruae-01/thumb.webp' },
  { src: 'works/healingpetfood-supplement/07.png',                    dest: 'works/healingpetfood-supplement/thumb.webp' },
  { src: 'works/pokemon-stay-jeju/01.png',                            dest: 'works/pokemon-stay-jeju/thumb.webp' },
  { src: 'works/art-tikkle-vol1/01.png',                              dest: 'works/art-tikkle-vol1/thumb.webp' },
  { src: 'works/ob-beer-chronicle/01.png',                            dest: 'works/ob-beer-chronicle/thumb.webp' },
  { src: 'works/ploom-popup-fixture/05.png',                          dest: 'works/ploom-popup-fixture/thumb.webp' },
  { src: 'works/ballantines-hour-lounge/01.png',                      dest: 'works/ballantines-hour-lounge/thumb.webp' },
  { src: 'works/breville-29cm/01.png',                                dest: 'works/breville-29cm/thumb.webp' },
  { src: 'works/wonderplace-lilcherry/01.png',                        dest: 'works/wonderplace-lilcherry/thumb.webp' },
  { src: 'works/cass-hanmac/01.png',                                  dest: 'works/cass-hanmac/thumb.webp' },
  { src: 'works/cass-olympic-day-run/01.png',                         dest: 'works/cass-olympic-day-run/thumb.webp' },
  { src: 'works/cass-gs-right-light-bar/01.png',                      dest: 'works/cass-gs-right-light-bar/thumb.webp' },
  { src: 'works/pokemon-town-lotte/01.png',                           dest: 'works/pokemon-town-lotte/thumb.webp' },
  { src: 'works/hybe-labels-popup/00.png',                            dest: 'works/hybe-labels-popup/thumb.webp' },
  { src: 'works/world-of-tequila/Enscape_2024-05-13-14-40-24.png',   dest: 'works/world-of-tequila/thumb.webp' },
];

async function run() {
  for (const { src, dest } of targets) {
    const srcPath = path.join(publicDir, src);
    const destPath = path.join(publicDir, dest);
    const before = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(destPath);
    const after = fs.statSync(destPath).size;
    console.log(`${dest.padEnd(55)} ${(before/1024/1024).toFixed(1).padStart(6)}MB → ${(after/1024).toFixed(0).padStart(5)}KB`);
  }
  console.log('\n완료!');
}

run().catch(console.error);
