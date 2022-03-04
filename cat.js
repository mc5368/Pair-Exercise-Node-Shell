let fs = require("fs")

module.exports = function cat (cmd) {
  let arguments = cmd.split(" "); //first arg is cat, second argument is first file, <, second file
  if (arguments[0] !== "cat") {
    return;
  }
  if (arguments.length === 2) {
    fs.readFile(arguments[1], "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    })
  }
}


