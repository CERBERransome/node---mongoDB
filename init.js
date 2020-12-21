import "./db"
//이렇게 import만 해주었다
import main from "./main";
import dotenv from "dotenv";
dotenv.config()

const port = process.env.PORT;

const handleListening = () =>{
    console.log(`✅ Listening on: http://localhost:${port}`);
    console.log(`✅ Listening on profile: http://localhost:${port}/profile`);
};

main.listen(port, handleListening);
