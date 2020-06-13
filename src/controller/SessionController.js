const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { email, password } = request.body;

        if(email == null || password == null 
            || email == undefined || password == undefined
            || email == '' || password == ''){
            return response.status(400).json({ error: 'Preencha os campos.'});
        }

        const user = await connection('user')
        .where({
            'email': email,
            'password': password
        })
        .select('name')
        .select('id')
        .first();

        if(!user){
            return response.status(400).json({ error: 'Usuário não encontrado' });
        }

        return response.json(user);
    }
}