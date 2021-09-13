const express = require('express');
const boardOptions = require('../controllers/board.js');

const router = express.Router();

router.post('/getboards/:workspaceId', boardOptions.getBoards);
router.post('/', boardOptions.createBoards);
router.patch('/:id', boardOptions.editBoards);
router.delete('/:id', boardOptions.deleteBoards);

module.exports = router;