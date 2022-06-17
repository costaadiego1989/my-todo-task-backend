process.env.PORT = process.env.PORT || 8080;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

const tasksRouter = require('./routes/tasks.router');
app.use("/api", tasksRouter);

require('./database/connection');

app.listen(process.env.PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `\nAPI rodando na porta: ${process.env.PORT} no ambiente: ${process.env.NODE_ENV}\n`);
});