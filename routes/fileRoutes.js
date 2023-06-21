const express = require("express");

const File = require("../models/filesSchema");
const fs = require('fs');
const multer = require('multer');
const csv = require('csv-parser');
const fileControllers = require('../controllers/fileControllers');

const router = express.Router();

const upload = multer({ dest: './uploads/' });



//Getting all the files list
router.get('/',fileControllers.getData);


  //uploading files
  router.post('/upload', upload.single('csvfile'),fileControllers.uploadFile);



//getting the file data
router.get('/file/:id', fileControllers.fileDatas);


//deleting the desired file
  router.post('/delete/:id' ,fileControllers.deleteFile)

module.exports = router;