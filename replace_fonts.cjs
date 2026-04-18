const fs = require('fs');
const path = require('path');

const exts = ['.jsx', '.css'];

const walk = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walk(filepath);
        } else if (exts.includes(path.extname(filepath))) {
            let content = fs.readFileSync(filepath, 'utf8');
            let original = content;
            content = content.replace(/'Syne',\s*sans-serif/g, "'Inter', sans-serif")
                             .replace(/'Space Grotesk',\s*sans-serif/g, "'Inter', sans-serif")
                             .replace(/'Space Grotesk',\s*-apple-system,\s*sans-serif/g, "'Inter', sans-serif");
            if (content !== original) {
                fs.writeFileSync(filepath, content);
                console.log('Updated:', filepath);
            }
        }
    });
};

walk('./src');
