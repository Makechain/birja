const db = require("../models")
const Op = db.Sequelize.Op
const User = db.user


exports.addUser = async (req,res)=>{

}
exports.getUsers = async (req,res)=>{
    try {
        res.json(['123', '456'])
    }catch (e) {
        
    }
}