const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());

app.get("/find",(req,res)=>{
    num = req.query.number;
    let n = parseInt(num);
    let r = n %2 == 0?"even":"odd";
    let msg = n+" is "+r;
    let append = msg +"\n";
    fs.appendFile("result.txt",append,(err)=>{
        if(err){
            console.log(err);
        }
    });
    res.json({"msg":msg});
})


app.listen(9000,()=>{
    console.log("Server Ready at port 9000");
});