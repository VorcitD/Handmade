const connection = require('../database/connection');
const { hash } = require('bcryptjs');
const CreateUserService = require('../services/CreateUserService');

module.exports = {
    async index(request, response){
        const users = await connection('users');

        return response.json(users);
    },

    async create(request, response){
        try{

            const { email, password, name, phone } = request.body;

            const user = await CreateUserService.execute({
                email,
                password,
                name,
                phone,
            });

            delete user.password;
            
            return response.status(200);

        } catch(error){

            return response.status(400).json({ message: error.message });
        }
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