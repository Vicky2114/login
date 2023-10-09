import {User} from './models/user.mjs'
export const add = async(req,res) => {
    const name=req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({email:req.body.email}) 
    if(user.email===req.body.email){
        return res.status(401).send({
            bSuccess:false,
            message:"user already registered"
        })
    }
    User.create({
        name:name,
        email:email,
        password:password
    })
    return res.status(200).send({
        bSuccess:true,
        message:"successfully registered"
    })
}
export const login = async(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({email:req.body.email}) 
    if(user){
        if(user.password===req.body.password){
            return  res.status(200).send({
                bSuccess:true,
                message:"user successfully login",
                data:{
                    email:email,
                    password:password
                }
               })
        }
        else{
       return  res.status(401).send({
        bSuccess:false,
        message:"password incoreect"
       })
    }
    }
    else{
        return res.status(401).send({
            bSuccesss:false,
            message:"incorrect details"
        })
    }
}   

export const alldata = async (req,res) =>{
    const user = await User.find({});
    console.log(user);
    return res.status(201).send({
        user:user
    })
}