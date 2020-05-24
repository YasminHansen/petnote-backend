const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const [count] = await connection('schedule').count();
        // armazena o numero de compromissos cadastrados pelo usuario

        const schedule = await connection('schedule')
        .select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(schedule);
    },

    async create(request, response){
        const { day, month, year, hour, minute, description, place } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('schedule').insert({
            day,
            month,
            year,
            hour,
            minute,
            description,
            place,
            user_id,
        });

        return response.json({ id }); 
    },

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;
       
        const schedule = await connection('schedule')
        .where('id', id)
        .select('user_id')
        .first();

        if(schedule.user_id !== user_id){
            return response.status(401).json({ error: 'Operation not permitted. '});
        }

        await connection('schedule').where('id', id).delete();

        return response.status(204).send();
    }
};