const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { description } = request.body;

        const [ id ] = await connection('commitment').insert({
            description,
        })

        return response.json({ description, id });
    }
}