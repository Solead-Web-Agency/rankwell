#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Déterminer l'architecture
const platform = os.platform();
const arch = os.arch();

let binaryName;
if (platform === 'darwin') {
  binaryName = arch === 'arm64' ? 'lightningcss-darwin-arm64' : 'lightningcss-darwin-x64';
} else if (platform === 'linux') {
  binaryName = `lightningcss-linux-${arch}-gnu`;
} else if (platform === 'win32') {
  binaryName = arch === 'arm64' ? 'lightningcss-win32-arm64-msvc' : 'lightningcss-win32-x64-msvc';
} else {
  console.log('Platform not supported');
  process.exit(0);
}

const lightningcssDir = path.join(__dirname, '..', 'node_modules', 'lightningcss');
const binaryDir = path.join(__dirname, '..', 'node_modules', binaryName);
const binaryFile = path.join(binaryDir, `lightningcss.${binaryName.replace('lightningcss-', '')}.node`);
const targetLink = path.join(lightningcssDir, `lightningcss.${binaryName.replace('lightningcss-', '')}.node`);

if (fs.existsSync(binaryFile) && !fs.existsSync(targetLink)) {
  try {
    fs.symlinkSync(
      path.relative(lightningcssDir, binaryFile),
      targetLink,
      'file'
    );
    console.log(`✅ Created symlink: ${targetLink}`);
  } catch (error) {
    console.error('Error creating symlink:', error);
  }
} else if (!fs.existsSync(binaryFile)) {
  console.log(`⚠️  Binary not found: ${binaryFile}`);
  console.log(`   Run: npm install ${binaryName}`);
}

