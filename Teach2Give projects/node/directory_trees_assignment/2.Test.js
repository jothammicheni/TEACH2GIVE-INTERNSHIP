const { directoryToTree } = require('./1.DirectoryToTree'); // Correct the import path
const path = require('path'); // Import the 'path' module
const fs = require('fs');


const relativePath = './2.DIRECTORY_to_TREE'
const rootPath = path.resolve(process.cwd(),relativePath);

const DirectoryTree = directoryToTree (rootPath, 5);
console.log (DirectoryTree);