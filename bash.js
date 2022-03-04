const pwd = require('./pwd');
const ls = require("./ls")
const cat = require("./cat")
const curl = require("./curl")

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let args = cmd.split(" "); //first arg is cat, second argument is first file, <, second file
  if (args[0] ==="pwd"){
    pwd(done);
  }
  if (args[0] ==="ls"){
    ls(done);
  }
  if (args[0] ==="cat"){
    cat(done,args[1]);
  }
  if (args[0] ==="curl"){
    curl(done,args[1]);
  }
  //process.stdout.write("you typed: " + cmd);
});

function done (output) {
  process.stdout.write(output)
  process.stdout.write("\nprompt > ")

}




