import main from "./main";

const port = 8080;

const handleListening = () =>{
    console.log(`✅ Listening on: http://localhost:${port}`);
    console.log(`✅ Listening on profile: http://localhost:${port}/profile`);
};

main.listen(port, handleListening);
