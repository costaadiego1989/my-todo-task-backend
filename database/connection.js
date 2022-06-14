const mongoose = require('mongoose');

const mongoConnection = mongoose.connect("mongodb://localhost:27017/Tasks");
mongoConnection.then(
    db => console.log('\x1b[36m%s\x1b[0m', 'Mongo conectado com sucesso'),
    err => console.log('\x1b[33m%s\x1b[0m', 'Erro ao conectar com o mongo: ', err)
);

module.exports = {
    MongoConnection: mongoConnection
}