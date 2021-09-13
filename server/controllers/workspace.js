const { response } = require('express');
const mongoose = require('mongoose');

const Workspace = require('../models/workspace.js');

const getWorkspaces = async (request, response) => {
    
    try {

        const workspaces = await Workspace.find();

        response.status(200).json(workspaces);

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

const getWorkspace = async (request, response) => {

    try {

        const { id } = request.params;

        const workspace = await Workspace.findById(id);
        const workspaceTitle = workspace.title;

        response.status(200).json(workspaceTitle);

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }
}

const createWorkspaces = async (request, response) => {
    
    try {

        const { title, description } = request.body;

        const id = mongoose.Types.ObjectId();
        await Workspace.create({
            id,
            title,
            description,
        });

        response.status(200).json({ message : "Workspace has been created" });

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

const editWorkspaces = async (request, response) => {
    
    try {

        const { id } = request.params;

        const { title, description } = request.body;

        if(!mongoose.Types.ObjectId.isValid(id))
            return response.status(404).json({ message : "No Workspace with that id" });

        const workspaceDetails = await Workspace.findById(id);

        workspaceDetails.title = title;
        workspaceDetails.description = description;

        workspaceDetails.save();

        response.status(200).json({ message : "Workspace has been updated" });

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

const deleteWorkspaces = async (request, response) => {

    try {

        const { id } = request.params;

        if(!mongoose.Types.ObjectId.isValid(id))
            return response.status(404).json({ message : "No Workpsace with that id" });

        await Workspace.findByIdAndDelete(id);

        response.status(200).json({ message : "Workspace has been deleted" });

    } catch (error) {
        
        console.log(error);
        response.status(500).json({ message : error });
    }

}

module.exports = { getWorkspaces, getWorkspace, createWorkspaces, editWorkspaces, deleteWorkspaces }