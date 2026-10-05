const mongoose=require('mongoose')
async function connect(){
    try{
         await mongoose.connect('mongodb://127.0.0.1:27017/reactcrud2026')
          console.log("DB is connected..")
      


       

    }catch(err){
        console.log(err)
    }

}
module.exports=connect