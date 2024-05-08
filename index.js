const mdl=require("./mdl")
const mdl2=require("./def_modules/mdl2")
const clr=require('colors')
const server = require("http");
const express=require('express')
const app=express()
const path=require('path')
//var file=require('fs')
const bodyParse = require("body-parser")
//var foo=require("./config")
const System=require('os') //Use Multer lib to store file input buffer;

/*const stc=require("yahoo-stock-api").default
const nse=new stc()
var Info=JSON.stringify(System.userInfo())

console.log(JSON.parse(Info))
file.writeFileSync("text.txt",Info)*/
//nse.getSymbol({"symbol":"sbin.ns"}).then(console.log)
//nse.getTidyName("sbin.ns").then(console.log)

const Server = server.createServer(app);
app.use(express.json())
app.use(bodyParse.urlencoded())
app.use(bodyParse.json())
app.use(
  '/static',
  express.static(path.join(__dirname, 'static')),
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.get('/' , (req , res)=>{
    const plt=System.platform()
    const arc="-file"
  const name="node"
    //console.log(__dirname)
  let user = 'Bob'
//console.log(`We love ${user}.`)
   res.sendFile(__dirname+"/LEARN.html")
  //res.send(`We love ${user}.`+plt+":"+arc)
   //res.render("Learn",{"file":plt,"obj":arc,"content1":mdl.run(),"content2":mdl2.run2()})

})
app.post("/write",(req,res)=>{
    //console.log(req.body)
   var store=JSON.stringify(req.body)
//file.appendFileSync(__dirname+"/text.txt",store)
res.send(store)
})
app.get("/download",(req,res)=>{
   const file=__dirname;
    res.download(__dirname+"/text.txt",(err)=>{
        if(err){
          res.send("error");
        } } )
  

})

Server.listen(3004,()=>{
    console.log("Server running..".rainbow)
})
