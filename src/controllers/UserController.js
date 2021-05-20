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

        return response.status(200).json({
            message: 'User created succesfully.',
        });
    },

    async update(request, response){
        const { id } = request.params;

        const checkUser = await connection('users').where({ id }).first();
        
        if(!checkUser){
            return response.status(400).json({ error: 'User not found.'});
        }

        const { email, name, phone } = request.body;

        await connection('users').where({ id }).update({
            email,
            name,
            phone,
        });

        return response.status(200).json({
            message: 'User updated succesfully',
        })

    },

    async delete(request, response){
        const { id } = request.params;

        const checkUser = await connection('users').where({ id }).first();
        
        if(!checkUser){
            return response.status(400).json({ error: 'User not found.'});
        }

        await connection('users').where({ id }).del();

        return response.status(204).json({
            message: 'User deleted succesfuly',
        })
        
    },
}