'use strict';
const express = require('express');
const router = express.Router();
const {
  user_list_get,
  user_get,
  user_create_post,
} = require('../controllers/userController');

router.get('/', user_list_get);

router.get('/:id', user_get);

router.post('/', user_create_post);

router.put('/cat/:id', (req, res) => {
  res.send('From this endpoint you can edit users.');
});

router.delete('/cat/:id', (req, res) => {
  res.send('From this endpoint you can delete users.');
});

module.exports = router;
