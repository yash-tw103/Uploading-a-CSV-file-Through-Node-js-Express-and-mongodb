const File = require("../models/filesSchema");
const fs = require('fs');
const multer = require('multer');
const csv = require('csv-parser');


const getData =  async (req, res) => {
    try {
      const files = await File.find({});
      res.render('upload', { files });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

const uploadFile =  async (req, res) => {
    try {
      if (!req.file) {
        res.status(400).send('No file uploaded');
        return;
      }
  
      const file = new File({
        originalname: req.file.originalname,
        filename: req.file.filename,
        filepath: req.file.path
      });
  
      await file.save();
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }


  const fileDatas = async (req, res) => {
    try {
      const file = await File.findById(req.params.id);
      if (!file) {
        res.status(404).send('File not found');
        return;
      }
  
      const fileData = [];
      fs.createReadStream(file.filepath)
        .pipe(csv())
        .on('data', (data) => fileData.push(data))
        .on('end', () => {
          res.render('fileData', { fileData });
        });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  const deleteFile =  async(req,res)=>{
    try {
      const result = await File.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }

  module.exports = {
    getData, uploadFile , fileDatas , deleteFile
  }
