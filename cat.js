let fs = require("fs")

module.exports = function cat (done) {
    fs.readFile(arguments[1], "utf8", (err, data) => {
      if (err) throw done("Something went wrong");
      done(data);
    })
}


