const mongoose = require('mongoose');

const Board = require('../models/board.js');
const Workspace = require('../models/workspace.js');

const getBoards = async (request, response) => {
    
    try {

        const { workspaceId } = request.params;

        let boards = await Board.find({ workspaceId });

        if(boards === null || boards === undefined)
            boards = [];

        response.status(200).json(boards);

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

const createBoards = async (request, response) => {
    
    try {

        const { title, description, workspaceId } = request.body;

        if(!mongoose.Types.ObjectId.isValid(workspaceId))
            return response.status(404).json({ message : "No Board with that id" });

        const id = mongoose.Types.ObjectId();

        await Board.create({
            id,
            title,
            description,
            workspaceId,
        });

        response.status(200).json({ message : "Board Created" });

    } catch (error) {

        console.log(error);
        response.status(500).json({ message : error });
    }

}

const editBoards = async (request, response) => {
    
    try {

        const { id } = request.params;

        const { title, description } = request.body;

        if(!mongoose.Types.ObjectId.isValid(id))
            return response.status(404).json({ message : "No Board with that id" });

        const boardDetails = await Board.findById(id);

        boardDetails.title = title;
        boardDetails.description = description;

        boardDetails.save();

        response.status(200).json({ message : "Board Details Updated"  });

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

const deleteBoards = async (request, response) => {
    
    try {

        const { id } = request.params;

        if(!mongoose.Types.ObjectId.isValid(id))
            return response.status(404).json({ message : "No Board with that id" });

        await Board.findByIdAndDelete(id);

        response.status(200).json({ message : "Board Deleted Successfully" });

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

module.exports = { getBoards, createBoards, editBoards, deleteBoards };