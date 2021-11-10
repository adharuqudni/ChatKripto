const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.get('/', chatController.index);
router.get('/chat', chatController.chat);

module.exports = router;