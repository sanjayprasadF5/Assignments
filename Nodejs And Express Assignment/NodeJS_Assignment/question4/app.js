const fs = require('fs')

const content = 'hey ho lets go!'

fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})