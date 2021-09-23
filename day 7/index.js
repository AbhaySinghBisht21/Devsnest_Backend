const express = require("express");

const app = express();


app.get("/",(req,res) =>
{
    res.send("HELLo");
})

app.listen(5000);

