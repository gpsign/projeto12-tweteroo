import express from "express";

const app = express();
app.use(express.json());

let tweets = [];
let usuarios = [];

app.post('/sign-up', (req, res) => {
    usuarios.push({ username: req.body.username, avatar: req.body.avatar })
    res.send(200);
});

app.post('/tweets', (req, res) => {
    let usuario = usuarios.find(req.body.username);
    if (usuario == undefined) {
        res.send(401);
    }
    else { tweets.push({ username: req.body.username, avatar: usuario.avatar, tweet: req.body.tweet }); res.send(200) }
});

app.listen(5000);