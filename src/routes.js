const express = require('express');

const UserController = require('./controller/UserController');
const PetController = require('./controller/PetController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
const CommitmentController = require('./controller/CommitmentController');
const ScheduleController = require('./controller/ScheduleController');

const routes = express.Router();

//Cria sessão do usuário
routes.post('/session', SessionController.create);

//Rotas do Usuário
routes.get('/user', UserController.index);

// O método acima lista todos os usuários
// Esse método será excluído futuramente
routes.post('/user', UserController.create); //cria a rota de criação do usuário
routes.get('/profile', ProfileController.index); //exibe todos os pets cadastrados pelo usuário no seu perfil
routes.get('/profile/schedule', ProfileController.scheduleIndex); //exibe todos os compromissos cadastrados pelo usuário

//Rotas relacionada ao cadastro, edição e deleção de pet
routes.get('/pets', PetController.index); //lista TODOS os pets
routes.post('/pets', PetController.create); //cria a rota de criação de pet
routes.delete('/pets/:id', PetController.delete); //deleta um pet cadastrado
routes.post('/pets/edit', PetController.edit); // edita um pet cadastrado

// Rotas relacionadas ao cadastro de novos compromissos que serão usados na agenda
routes.post('/commitment', CommitmentController.create); //cria um novo compromisso

// Rota da agenda, onde são cadastrados os compromissos juntos com a descrição e horário
routes.get('/schedule', ProfileController.scheduleIndex); //lista TODOS os compromissos
routes.post('/schedule', ScheduleController.create); // cria um novo compromisso na agenda
routes.delete('/schedule/:id', ScheduleController.delete); // deleta um compromisso que foi criado na agenda
routes.post('/schedule/edit', ScheduleController.edit); //edita um compromisso cadastrado

routes.post('/image-upload'); // cria um novo compromisso na agenda
module.exports = routes; //exporta as rotas