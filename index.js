var mdl=require("./mdl")
var mdl2=require("./def_modules/mdl2")
var clr=require('colors')
var express=require('express')
const app=express()
var path=require('path')
var file=require('fs')
const bodyParse = require("body-parser")
//var foo=require("./config")
var System=require('os') //Use Multer lib to store file input buffer;

/*const stc=require("yahoo-stock-api").default
const nse=new stc()
var Info=JSON.stringify(System.userInfo())

console.log(JSON.parse(Info))
file.writeFileSync("text.txt",Info)*/
//nse.getSymbol({"symbol":"sbin.ns"}).then(console.log)
//nse.getTidyName("sbin.ns").then(console.log)

app.use(express.json())
app.use(bodyParse.urlencoded())
app.use(bodyParse.json())

app.set('view engine','ejs')
app.get('/' , (req , res)=>{
    const plt=System.platform()
    const arc=System.type()
    console.log(arc)
   //res.sendFile(__dirname+"/LEARN.html")
   res.render("Learn",{"file":plt,"obj":arc,"content1":mdl.run(),"content2":mdl2.run2()})

}).listen(3000,()=>{
    console.log("Server running..".rainbow)
})
app.post("/write",(req,res)=>{
    //console.log(req.body)
   var store=JSON.stringify(req.body)
file.appendFileSync("text.txt",store)
console.log("SUCCESS.")
res.send("submited.")
})
app.get("/download",(req,res)=>{
   const file=__dirname;
    res.download("text.txt",(err)=>{
        if(err){
            console.log(err)
        } } )


})