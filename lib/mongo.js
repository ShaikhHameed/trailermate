import mongoose, { connect } from "mongoose";

const connectMongoDb = () =>{
        
    try{
        mongoose.connect(process.env.Mongodb_link);
        console.log('connected')
    }
    catch(err){
        console.log(err);
    }


}

export default  connectMongoDb;