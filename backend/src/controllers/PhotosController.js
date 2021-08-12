const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { source } = request.body;

        const {id_clothes} = request.params;

        const checkClothes = await connection('clothes').where('id',id_clothes).first();
        
        if(!checkClothes){
            return response.status(400).json({ error: 'Clothe does not exist'});
        }
        
        await connection('photos').insert({
            source,
            id_clothes
        });

        return response.status(200).json({
            message:'Photo created successfully'
        })
},
async delete(request, response){
    const { id } = request.params;

    const checkClothes = await connection('clothes').where({ id }).first();
    
    if(!checkClothes){
        return response.status(400).json({ error: 'Clothe not found.'});
    }

    await connection('photos').where({ id }).delete();

    return response.status(204).json({
        message: 'Photo deleted succesfuly',
    })
    
},
async update (request, response){
    const {id} = request.params;
    
    const {source}= request.body;
    const checkPhoto = await connection('photos').where({id}).first();

    if(!checkPhoto){
        return response.status(400).json({error: 'Photo not found'});
    }

    await connection('photos').where({id}).update({
        source
    })

    return response.status(200).json({
        message: 'Photo updated succesfully',
    })

},

async index (request,response){
    const {id_clothes}=request.params;

    const photos = await connection('photos').where('id_clothes',id_clothes).select();

    return response.json(photos)
}
}