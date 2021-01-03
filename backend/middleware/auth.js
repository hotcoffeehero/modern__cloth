const admin = require('../firebase')

exports.authCheck = async (req,res,next) => {
    try {
        const fbUser = await admin
        .auth()
        .verifyIdToken(req.headers.authtoken)
        // console.log("FirebaseUser: ", fbUser)
        
        req.user = fbUser
        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        .json({
            error: 'Invalid or Expired Token'
        })
    }
}