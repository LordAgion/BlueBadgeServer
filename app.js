require('dotenv').config();
const express = require('express');
const app = express();
const speices = require('./controllers/speciescontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers')); 


app.use('/auth', user);
app.use('/speices', speices);


app.listen(3001, () => console.log(`app is listening port ${process.env.PORT}`))