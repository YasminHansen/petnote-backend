require('dotenv').config();
var express = require('express'); //importando o módulo express para a variável
var cors = require('cors');
const routes = require('./routes'); //importa o arquivo com as rotas
var app = express(); //armazena a aplicação

var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.listen(process.env.PORT || 3333); //manda a aplicação ouvir a porta 3333 -> localhost:3333
//para rodar a aplicação basta rodar "npm start" no terminal na pasta backend