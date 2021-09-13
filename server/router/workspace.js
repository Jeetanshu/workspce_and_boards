const express = require('express');
const workspaceOptions = require('../controllers/workspace.js');

const router = express.Router();

router.post('/getworkspaces', workspaceOptions.getWorkspaces);
router.post('/getworkspace/:id', workspaceOptions.getWorkspace);
router.post('/', workspaceOptions.createWorkspaces);
router.patch('/:id', workspaceOptions.editWorkspaces);
router.delete('/:id', workspaceOptions.deleteWorkspaces);

module.exports = router;