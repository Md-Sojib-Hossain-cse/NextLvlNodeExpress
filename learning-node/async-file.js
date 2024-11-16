const fs = require("fs");

//reading text asynchronously

fs.readFile("./texts/read.txt" ,"utf-8", (err , data) => {
    if(err) {
        throw Error("Error Reading Text");
    }
    // console.log(data);
    
    //writing text asynchronously
    fs.writeFile("./texts/write2.txt" , data , "utf-8" , (err) => {
        if(err){
            throw Error("Error writing data");
        }
        console.log("Saved!")
    })
})

console.log("porer console")