const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);


//Lista todas as ONG's
routes.get('/ongs', OngController.index);
//Cadastra a ONG
routes.post('/ongs', OngController.create);

//Lista todos os casos de uma ONG
routes.get('/profile', ProfileController.index);

//Lista todos os casos de todas as ONG
routes.get('/incidents', IncidentController.index);
//Cadastra um novo caso
routes.post('/incidents', IncidentController.create);
//Detelar um caso
routes.delete('/incidents/:id', IncidentController.delete);
//Lista todos os casos apartir do valor informado
routes.get('/incidentsByValue', IncidentController.incidentByValue);


module.exports = routes;