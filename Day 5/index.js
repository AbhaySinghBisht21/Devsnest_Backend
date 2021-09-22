var fs=require("fs");

//to make new folder
fs.mkdirSync("day2");

//writing inside a file

fs.writeFileSync("day2/hello.txt"."Hello World",(err)=>{
  if (err){
    console.log(err)
  }
} );

//update

fs.appendFileSync("day2/hello.txt","Devs")

//read
 fs.readFileSync("day2/hello.txt"."Hello World") //here it will give buffer
 fs.readFileSync("day2/hello.txt"."Hello World","utf-8");

 //rename
 fs.renameSync("day2/hello.txt","day2/hello2.txt");

 //deletion

 fs.unlink("day2/hello2.txt"); //deletion of file
 fs.rmdirSync("day2");

 