const connection = require('../database/connection');

module.exports={

async create (request,response){
    const {name, price, description, gender} = request.body;

    await connection('clothes').insert({
        name,
        price,
        description,
        gender
    });

    return response.status(200).json({
        message:"Clothe created successfully",
    })

},
async update(request, response){
    const { id } = request.params;

    const checkClothes = await connection('clothes').where({ id }).first();
    
    if(!checkClothes){
        return response.status(400).json({ error: 'Clothe not found.'});
    }

    const { name, price, description,gender } = request.body;

    await connection('clothes').where({ id }).update({
        name,
        price,
        description,
        gender
    });

    return response.status(200).json({
        message: 'Clothe updated succesfully',
    })

},

async delete(request, response){
    const {id} = request.params;

    const checkClothes = await connection('clothes').where({id}).first();
    
    if(!checkClothes){
        return response.status(400).json({ error: 'Clothe not found.'});
    }

    await connection('clothes').where({id}).del();

    return response.status(204).json({
        message:'Clothe deleted successfully',
    })
},

async index(request, response){
    const clothes = await connection('clothes');

    return response.json(clothes);
},

}