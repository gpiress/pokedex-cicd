import express from 'express';


const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Started pokedex-cicd on port ${PORT}`);
});