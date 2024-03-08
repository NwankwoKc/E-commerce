
//Get Request
exports.getting = Model=> async (req,res,next)=>{
    try{
        const price = req.query.Price;
        const data = await Model.find();
        res.status(201).json({
            status:'success',
            data:data
        })
    }catch{
        next(err)
    }
}
//GetById Request
exports.gettingSpecific = Model=> async (req,res,next)=>{
    try{
        const data = await Model.findById(req.params.id);
        res.status(201).json({
            status:'suucees',
            data:data
        })
    }catch{
        next(err)
    }
}

//Post Request
exports.posting = Model=> async (req,res,next)=>{
    try{
        const data = await Model.create(req.body);
        res.status(201).json({
            status:'success',
            data:data
        })
    }catch{
        next(Error)
    }

}

//Update Request
exports.updating = Model=> async (req,res,next)=>{
    try{
        const data = await Model.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidatorsLtrue
        });
        res.status(201).json({
            status:'success',
            data:data
        })
    }catch{
        next(err)
    }

}

//Deleting Request
exports.deleting = Model => async(req,res,next)=>{
    try{
        const data = await Model.findByIdAndDelete();
        res.status(201).json({
            status:'success',
            data:data
        })
    }catch{
        next(err)
    }
}

//Patch Request
exports.patching = Model => async (req,res,next)=>{
    try{
        const data = await Model.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidatorsLtrue
        })
        res.status(201).json({
            status:'Success'
        })
    }catch{
        next(err)
    }
}