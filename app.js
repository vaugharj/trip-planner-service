const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("Hi");
})

app.listen(443, ()=>{
    console.log("Server started. Listening on port 8444");
});