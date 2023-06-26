import express from "express";

const app = express();
app.use(express.json());

let tweets = [];
let usuarios = [];

app.post('/sign-up', (req, res) => {
    usuarios.push({ username: req.body.username, avatar: req.body.avatar })
    res.send(200);
});

app.get("/", (req, res) => {

})

app.listen(5000);