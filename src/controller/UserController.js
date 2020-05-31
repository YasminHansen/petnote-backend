const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user = await connection('user').select('*');
    
        return response.json(user);
    },

    async create(request, response){
        const { name, email, password, city, uf } = request.body;
    
        const user = await connection('user')
        .where('email', email)
        .select('email')
        .first();

        if(user !== undefined)
        {
            return response.status(401).json({ error: 'E-mail já cadastrado.'});
        }
        
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