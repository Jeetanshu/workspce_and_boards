const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const workspaceRoutes = require('./router/workspace.js');
const boardRoutes = require('./router/board.js');

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

app.use('/workspace', workspaceRoutes);
app.use('/board', boardRoutes);

const PORT = process.env.PORT || 5000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true, 'useFindAndModify' : false})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));