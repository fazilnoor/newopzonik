const express =require("express")
const path = require('path')
const hbs = require('hbs')
const app=express();
// const router=require("express").Router()
const allrouter=require("./routes/allRoutes")



app.use(express.static('assets'))


const static_path=path.join(__dirname,"./public")
const template_path=path.join(__dirname,"views")
const partials_path=path.join(__dirname,"views/partials")



app.set('views', path.join(__dirname,"views/partials/"))
app.set('views', path.join(__dirname,"views"))
app.set('view engine', 'hbs')
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.use("/public",express.static(path.join("public")))



app.use(allrouter);

app.listen("3000",()=>{
    console.log("listening post number 3000")
})
