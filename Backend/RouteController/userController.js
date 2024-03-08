const factoryFunction = require('../Utility/utility');
const userModel = require('../Model/signup');


exports.get = factoryFunction.getting(userModel); 
exports.post = factoryFunction.posting(userModel);
exports.getSpecific = factoryFunction.gettingSpecific(userModel);
exports.update = async (req,res)=>{
    try{
        const data = userModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:'success',
            data
        })
    }catch{
        res.error()
    }

}
