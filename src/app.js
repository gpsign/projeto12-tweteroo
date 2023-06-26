import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let tweets = [];
let usuarios = [];

app.post('/sign-up', (req, res) => {
    usuarios.push({ username: req.body.username, avatar: req.body.avatar })
    res.send(200);
});

app.post('/tweets', (req, res) => {
    if (usuarios == undefined) { res.send(401); } 
    else {
        let usuario = usuarios.find(req.header.user);
        if (usuario == undefined) {
            res.send(401);
        }
        else {
            tweets.push({ username: req.header.user, avatar: usuario.avatar, tweet: req.body.tweet });
            res.send(200)
        }
    }
});

app.get("/tweets", (req, res) => {
    let nmrTweets = tweets.length > 10 ? 10 : tweets.length;
    if (nmrTweets == 0) res.send([]);

    let ultimosTweets = [];

    for (let i = 0; i < nmrTweets; i++) {
        ultimosTweets.push(tweets[i]);
    }
    res.send(ultimosTweets);
});

app.listen(5000);