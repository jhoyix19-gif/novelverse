
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const read = (file)=> JSON.parse(fs.readFileSync(file));
const write = (file,data)=> fs.writeFileSync(file, JSON.stringify(data,null,2));

app.post("/register",(req,res)=>{
  let users = read("./data/users.json");
  users.push(req.body);
  write("./data/users.json",users);
  res.json({msg:"registered"});
});

app.post("/login",(req,res)=>{
  let users = read("./data/users.json");
  let user = users.find(u=>u.username===req.body.username && u.password===req.body.password);
  if(user) res.json(user);
  else res.status(401).json({msg:"invalid"});
});

app.get("/novels",(req,res)=>{
  res.json(read("./data/novels.json"));
});

app.post("/novels",(req,res)=>{
  let novels = read("./data/novels.json");
  req.body.id = Date.now();
  novels.push(req.body);
  write("./data/novels.json",novels);
  res.json({msg:"added"});
});

app.get("/novel/:id",(req,res)=>{
  let novels = read("./data/novels.json");
  let n = novels.find(x=>x.id==req.params.id);
  res.json(n || {});
});

app.post("/chapter",(req,res)=>{
  let chapters = read("./data/chapters.json");
  req.body.id = Date.now();
  chapters.push(req.body);
  write("./data/chapters.json",chapters);
  res.json({msg:"chapter added"});
});

app.get("/chapters/:novelId",(req,res)=>{
  let chapters = read("./data/chapters.json");
  res.json(chapters.filter(c=>c.novelId==req.params.novelId));
});

app.listen(3000,()=>console.log("running"));
