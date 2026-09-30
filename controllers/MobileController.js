const Mobile=require("../models/Mobile")
const cloudinary = require('cloudinary').v2
async function addMobile(req,res){
    try{
        cloudinary.config({
            cloud_name: "xfx09clt",
            api_key:"298355742958379",
            api_secret:"DVNNhFyzSrrAR4MAF8sLQMRxWIc"
        })
        const upload = await cloudinary.uploader.upload(req.file.path)
         console.log(upload)
         req.body.mobileImage = upload.secure_url;

        
        // console.log(req.body)
        // console.log(req.file)
       
         let mobile=new Mobile(req.body)
         await mobile.save();
        console.log("Data saved successfully.....")
        
        res.status(200).send({message: 'Data has been saved successfully'})

    }catch(err){
        res.status(400).send({message: 'Something went wrong'})
        console.log(err)
    }
}
async function getMobiles(req,res){
    try{
        // let books=await Book.find({});
        // console.log(books)
        let totalMobiles = await Mobile.countDocuments({})
        console.log(totalMobiles)
        
        let mobiles =await Mobile.find({ modelName : new RegExp(req.query.searchMobile, "i")}).skip((req.query.pageNo-1)*(req.query.mobilesPerPage)).limit(req.query.mobilesPerPage)
        res.status(200).send({data : mobiles,totalMobiles : totalMobiles})

    }catch(err){
        console.log(err)
        res.status(400).send({message: err })
    }

}
async function deleteMobiles(req,res){
    try{
        let id=req.params.id;
        await Mobile.deleteOne({_id:id});
        res.status(200).send({success: true})
       
    }catch(err){
        console.log(err)
        res.status(400).send({message: err })
    }

}
async function getMobileForEdit(req,res){
    try{
        let id=req.params.id;
        console.log(id)
        // let mobile=await Mobile.find({_id: id});
        let mobile = await Mobile.findById(id);
        console.log(mobile)
        res.status(200).send({data : mobile})

    }catch(err){
        console.log(err)
        res.status(400).send({message: err })
    }

}
async function editMobile(req,res){
    try{
        let id=req.params.id;
        console.log(id)
        let mobile=req.body
        console.log(mobile)
        await Mobile.updateOne({_id : id},req.body)
        console.log("Book updated successfully....")
        res.status(200).send({success : true})

    }catch(err){
         console.log(err)
        res.status(400).send({success: false })

    }
}
module.exports={
    addMobile,
    getMobiles,
    deleteMobiles,
    getMobileForEdit,
    editMobile
}