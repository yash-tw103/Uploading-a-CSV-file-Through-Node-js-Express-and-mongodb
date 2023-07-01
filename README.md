# Description
Csv parser website  to upload your Csv files on the browser and view them.
# Folder Structure
 #Config 
 it consists of your Mongodb datbase connection files
# Models
Contains the Schema of our database
# Routes 
Contain Routes for the following-
- Uploading our csv file.
- Get request for viewing all the documents uploaded
- delete request to delete the uploaded file
- link  for viewing the data of the particular file
# Controllers
  Contins the action for our Routes
# views
  Contains two files - Upload.ejs showing the view to upload the  file and to view all the files uploaded . Filedata.ejs Contains all data of that csv file that is being clicked to open.
  # Uploads
  Contains all the uploaded files , it's functionality is done through multer and csv parser
  
  
