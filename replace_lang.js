const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.next')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const regexReplacements = [
  { match: /\bWe're\b/g, replace: "I'm" },
  { match: /\bwe're\b/g, replace: "I'm" },
  { match: /\bWe've\b/g, replace: "I've" },
  { match: /\bwe've\b/g, replace: "I've" },
  { match: /\bWe'll\b/g, replace: "I'll" },
  { match: /\bwe'll\b/g, replace: "I'll" },
  { match: /\bWe\b/g, replace: "I" },
  { match: /\bwe\b/g, replace: "I" },
  { match: /\bOur\b/g, replace: "My" },
  { match: /\bour\b/g, replace: "my" },
  { match: /\bUs\b/g, replace: "Me" },
  { match: /\bus\b/g, replace: "me" },
];

const files = walkSync(path.join(__dirname, 'src'));

let changedFiles = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Hardcode explicit phrases first
  const exactPhrases = [
    [/Why Choose Us/g, "Why Choose Me"],
    [/Why Work With Us/g, "Why Work With Me"],
    [/Our Services/g, "My Services"],
    [/About Us/g, "About Me"],
    [/Contact Us/g, "Contact Me"],
    [/contact us/g, "contact me"]
  ];

  exactPhrases.forEach(([regex, replacement]) => {
    newContent = newContent.replace(regex, replacement);
  });

  regexReplacements.forEach(r => {
    // Only replace outside of HTML attributes or URLs if possible, but for a simple site this is usually fine everywhere
    newContent = newContent.replace(r.match, r.replace);
  });

  // Basic grammar cleanup for verbs that follow "we" vs "I"
  newContent = newContent.replace(/\bI are\b/g, "I am");
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    changedFiles++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Updated ${changedFiles} files`);
