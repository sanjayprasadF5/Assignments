const fs = require("fs");
  
let directory_name = "question2";
  
// Open the directory
let openedDir = fs.opendirSync(directory_name);
  
// Print the pathname of the directory
console.log("\nPath of the directory:", openedDir.path);
  
// Get the files present in the directory
console.log("Files Present in directory:");
  
let filesLeft = true;
while (filesLeft) {
  // Read a file as fs.Dirent object
  let fileDirent = openedDir.readSync();
  
  // If readSync() does not return null
  // print its filename
  if (fileDirent != null)
    console.log("Name:", fileDirent.name);
  
  // If the readSync() returns null
  // stop the loop
  else filesLeft = false;
}