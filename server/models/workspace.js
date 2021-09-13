const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema({
    id : String,
    title : String,
    description : String,
});

const Workspace = mongoose.model('workspaces', workspaceSchema);

module.exports = Workspace;