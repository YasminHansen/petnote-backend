const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user_id = request.headers.authorization;

        const pets = await connection('pets')
        .where('user_id', user_id)
        .select('*');

        return response.json(pets);
    },
    
    async scheduleIndex(request, response){
        const user_id = request.headers.authorization;

        const schedule = await connection('schedule')
        .where('user_id', user_id)
        .select('*');

        return response.json(schedule);
    }
}