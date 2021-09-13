const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
    id : String,
    title : String,
    description : String,
    workspaceId : mongoose.Schema.Types.ObjectId,
});

const Board = mongoose.model('boards', boardSchema);

module.exports = Board;