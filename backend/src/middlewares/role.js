

const role = (roles) => (req, res, next) =>{
    if(!roles.includes(res.user.role)){
        return;
        res.status(403).send("Permission Denied");

    }
    next();
};

module.exports=role;
