const connection = require('../database/connection');
const { hash } = require('bcryptjs');
 
module.exports = {
    async index(request, response){
        const users = await connection('users');

        return response.json(users);
    },

    async create(request, response){
        const { email, password, name, phone } = request.body;

        const checkUser = await connection('users').where({ email }).first();
        
        if(checkUser){
            return response.status(400).json({ error: 'Email already used.'});
        }

        const hashedPassword = await hash(password, 8);
        
        await connection('users').insert({
            email,
            password: hashedPassword,
            name,
            phone,
        });

        return response.json({
            message: 'User created succesfully.',
        });
    },

    async update(request, response){
        const { email, password, name, phone } = request.body;


    },

    async delete(request, response){
        const { id } = request.params;

        
    },
}