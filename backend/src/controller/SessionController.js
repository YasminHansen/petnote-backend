const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { email, password } = request.body;

        const user = await connection('user')
        .where({
            'email': email,
            'password': password
        })
        .select('name')
        .select('id')
        .first();

        if(!user){
            return response.status(400).json({ error: 'No User found' });
        }

        return response.json(user);
    }
}