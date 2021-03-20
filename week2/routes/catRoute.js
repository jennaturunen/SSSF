'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const {
  cat_list_get,
  cat_get,
  cat_create_post,
} = require('../controllers/catController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'), (req, res) => {
  console.log('cat post file', req.file);
  res.send('With this endpoint you can add cats.');
});

router.put('/cat/:id', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});

router.delete('/cat/:id', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

module.exports = router;
