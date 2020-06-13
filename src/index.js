require('dotenv').config();
var express = require('express'); //importando o módulo express para a variável
var cors = require('cors');
const routes = require('./routes'); //importa o arquivo com as rotas
var app = express(); //armazena a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/image-upload', (req, res) => {

    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    
    Promise
      .all(promises)
      .then(results => res.json(results))
  })

app.listen(process.env.PORT || 3333); //manda a aplicação ouvir a porta 3333 -> localhost:3333
//para rodar a aplicação basta rodar "npm start" no terminal na pasta backend