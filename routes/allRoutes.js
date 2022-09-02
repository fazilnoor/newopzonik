const router=require("express").Router();
const data=require("../descrip")
const productDesc=require("../productButton");
const productImage=require("../productButton");
const productDetail=require("../productInfo");
const productlList=require("../productList")

function shuffleArray(array) {

    console.log()
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

router.get("/home",(req,res)=>{
    
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=shuffleArray(productImage.productimg)
   
 
    res.render("index",{"data":listData,"button":listButton,"productimage":productImg})
})

router.get("/blog",(req,res)=>{
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=shuffleArray(productImage.productimg)
    res.render("blog",{"data":listData,"button":listButton,"productimage":productImg})
})


router.get("/contact",(req,res)=>{
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=shuffleArray(productImage.productimg)
    console.log("kaushal")
    res.render("contact",{"data":listData,"button":listButton,"productimage":productImg})
})
router.get("/custom",(req,res)=>{
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=shuffleArray(productImage.productimg)
    console.log("kaushal")
    res.render("custum",{"data":listData,"button":listButton,"productimage":productImg})
})
// blog detail router 
router.get("/rularoptics",(req,res)=>{
    res.render("rularOptics")
})
router.get("/advantage",(req,res)=>{
    res.render("advantageOfOpticalFiber")
})
router.get("/world_data",(req,res)=>{
    res.render("worldOfDataBlog")
})


router.get("/:key",(req,res)=>{
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=shuffleArray(productImage.productimg)
    const category=req.params.key
    const productL=productlList[category].product
    console.log(productL)
    res.render("product",{"data":listData,"button":listButton,"productimage":productImg,"productList":productL})
})
router.get("/product/:key",(req,res)=>{
    // console.log(req.params.key);
    const listData=data.opzonik
    const listButton=productDesc.product 
    const productImg=shuffleArray(productImage.productimg)
    const category=req.params.key
    const productD=productDetail[category]
    console.log(category)
    
    res.render("productDetails",{"data":listData,"button":listButton,"productimage":productImg,"productInfo":productD})
})





module.exports=router