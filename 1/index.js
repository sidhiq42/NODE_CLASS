const fs = require("fs");

const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn);

//Blocking Synchronous Way of Writing
const textOut = `This is what we know what about the : ${textIn} .\n created on ${Date.now()}seconds ago`;
fs.writeFileSync("./Output.txt", textOut);
console.log("File created successfully");

//Non-Blocking Asynchronous Way to Write
fs.readFile("./text1.txt", "utf-8", function (err, text1) {
    if (err) console.log("Error Occured 🔥")
  fs.readFile(`./${text1}.txt`, "utf-8", (err, text2) => {
    console.log(text2);
    fs.readFile("./append.txt", "utf-8", (err, text3) => {
      console.log(text3);
      fs.writeFile("./final.txt", `${text1}\n${text2}`, "utf-8", (err) => {
        console.log("File has been created 😃");
      });
    });
  });
});
console.log("Just Check It Out");
