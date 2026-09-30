const User= require('./models/User')
const bcrypt=require('bcrypt')
async function createAdmin(){
    try{
       let user = await User.findOne({email:'kumkumtyagi555@gmail.com'});
       if(user){
        console.log('user updated successfully.....');
       }
       else{
        user=new User();
        user.firstName='kumkum';
        user.lastName='Tyagi';
        user.mobileNo='9548557594'
        user.email='kumkumtyagi555@gmail.com';
        let password=bcrypt.hashSync('123456',10);
        user.password=password;
        user.userType='admin';
        await user.save();
        console.log("user created successfully.....")
       }

    }catch(err){
        console.log(err)
    }

}
module.exports=createAdmin