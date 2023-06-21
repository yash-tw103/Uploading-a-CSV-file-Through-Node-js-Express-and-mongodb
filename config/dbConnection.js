const mongoose = require("mongoose");

const connectDb = async () =>{
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/csv2" , {
            usenewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        console.log("Database connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
