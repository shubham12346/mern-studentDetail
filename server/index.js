import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";



const app = express();



app.use(bodyParser.json({limit:"20mb",extended :true}));

app.use(bodyParser.urlencoded({limit:"20mb",extended : true}));

app.use(cors());

app.use("/student",studentRoutes);



const port = process.env.PORT || 5000;
const uri = process.env.DATABASE || "mongodb+srv://shubham:shubham@cluster0.cwnmr.mongodb.net/schoolMS?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser :true
}).then(()=> app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})).catch((err)=> console.log(err.message));


