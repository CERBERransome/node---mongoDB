//****************** import ********************
//files
import "./db";

//node model
import main from "./main";
import dotenv from "dotenv";
dotenv.config();

//models
import "./models/video"
import "./models/comment"
//****************** import ********************

const port = process.env.PORT;

const handleListening = () =>{
    console.log(`✅ Listening on: http://localhost:${port}`);
    console.log(`✅ Listening on profile: http://localhost:${port}/profile`);
};

main.listen(port, handleListening);
