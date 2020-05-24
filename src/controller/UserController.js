const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user = await connection('user').select('*');
    
        return response.json(user);
    },

    async create(request, response){
        const { name, email, password, city, uf } = request.body;
    
        await connection('user').insert({
            name,
            email,
            password,
            city,
            uf,
        })    
        return response.json({ name });
    }
}