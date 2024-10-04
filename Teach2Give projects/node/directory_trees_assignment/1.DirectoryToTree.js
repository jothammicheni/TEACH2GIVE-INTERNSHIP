// path will handle and manipulate file paths
// fs will interact with the file system in reading directories and accessing file stats

const path = require ('path');
const fs = require ('fs');

//Recursively
/*

@param {String} rootDir  // Root directory to start from relative to .cmd
@param {Number} depth    // Indicates the depth to traverse ie No of sub directories
@returns {Object}        // Should return an object

*/

function directoryToTree (rootDir, depth) {
  const stats = fs.statSync (rootDir);
  const name = path.basename (rootDir);

  // This method should return an object in this form 👇👇👇

  const result = {
    path: rootDir.replace(process.cwd()+path.sep,""),
    name: name,
    type: stats.isDirectory () ? 'dir' : 'file',
    size: stats.size,
  };

  // We need to loop through each folder and check whether it contains any files in it

  if (stats.isDirectory ()) {
    // Initially the folder has 0 files - Assumption hence empty array
    result.children = [];

    if (depth > 0) {
      const files = fs.readdirSync (rootDir);
      files.forEach (eachFile => {
        const filePath = path.join (rootDir, eachFile);
        result.children.push (directoryToTree(filePath, depth - 1));
      });
    }
  }

  return result;
}

module.exports = {directoryToTree}
