const { findOneAndUpdate } = require('../models/user')
const User = require('../models/user')

exports.createOrUpdateUser = async (req, res)=>{
    const { name, picture, email } = req.user

    //Check if a user exists or not
    const user = await User.findOneAndUpdate({email}, {name, picture}, {new:true})

    if(user){
        res.json(user)
        console.log('USER:', user)
    } else {
        const newUser = await new User({
            email,
            name,
            picture,
        }).save()
        console.log("NEW USER:", newUser)
        res.json(newUser)
    }
}