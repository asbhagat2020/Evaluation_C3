<<<<<<< HEAD
const role = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).send("Permission Denied");
=======


const role = (roles) => (req, res, next) =>{
    if(!roles.includes(res.user.role)){
        return;
        res.status(403).send("Permission Denied");

>>>>>>> fa72693562cd341495212a4396c13594fa57af03
    }
    next();
};

<<<<<<< HEAD
module.exports = role;
=======
module.exports=role;
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
