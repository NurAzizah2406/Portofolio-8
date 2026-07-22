const fs = require('fs');
const path = require('path');

const publicDirs = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'public', 'icons')
];

publicDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      // Create new filename:
      // 1. Convert to lowercase
      // 2. Remove parentheses ()
      // 3. Replace all spaces with dashes
      const newName = file
        .toLowerCase()
        .replace(/[()]/g, '')
        .replace(/\s+/g, '-');
      
      if (file !== newName) {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, newName);
        
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: "${file}" -> "${newName}"`);
      }
    });
  } else {
    console.log(`Directory not found: ${dir}`);
  }
});

console.log('✅ All icons and images have been successfully renamed!');
