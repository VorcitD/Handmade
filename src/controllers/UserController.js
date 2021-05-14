const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response){
        const { username, email, password, name, phone } = request.body;
        
        const user = await connection('users').insert({
            username,
            email,
            password,
            name,
            phone,
        });

        return response.json({
            data: user,
            message: 'User created succesfully.',
        });
    }
}