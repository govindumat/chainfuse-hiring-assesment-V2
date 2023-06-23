const cors = require("cors");
const express = require("express");
const { makeTransaction , getTransactionbyAddress} = require("./router/transaction")

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
  console.log("Server started at port 8000");
});

app.get("/",(req, res)=>{
    console.log("server is running");
    res.send('200 ok');
})

app.get("/getTransactionbyAddress/:hash",async(req,res) => {
  // console.log("getTransactionbyAddress : ",await getTransactionbyAddress(req, res));
  try {
    let tx = await getTransactionbyAddress(req,res);
    res.json(tx);    
  } catch (error) {
    console.log(error);
  }
})

app.post("/maketransaction",async(req,res) => {
  console.log("transaction : ",await makeTransaction(req, res));
  res.json(await makeTransaction(req,res));
})
