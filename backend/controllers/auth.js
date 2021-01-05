const { findOneAndUpdate } = require('../models/user')
const User = require('../models/user')

exports.createOrUpdateUser = async (req, res) => {
    const { name, picture, email } = req.user

    //Check if a user exists or not
    const user = await User.findOneAndUpdate(
        {email}, 
        {name: email.split('@')[0], picture}, 
        {new:true})

    if(user){
        res.json(user)
        console.log('USER:', user)
    } else {
        const newUser = await new User({
            email,
            name: email.split('@')[0],
            picture,
        }).save()
        console.log("NEW USER:", newUser)
        res.json(newUser)
    }
}

exports.currentUser = async (req, res) => {
    User.findOne({email:req.user.email}).exec((err, user) => {
        if(err) throw new Error(err)
        res.json(user)
    })
}