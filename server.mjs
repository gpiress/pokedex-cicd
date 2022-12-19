import express from 'express';

import { all, byType } from './pokedex.mjs';

const PORT = 3000;

const app = express();

app.get('/', (_, res) => {
    res.send('Hello world!');
});

app.get('/pokemon', (_, res) => {
    const allPokemon = all();
    res.send(allPokemon);
});

app.get('/pokemon/:type', (req, res) => {
    const { type } = req.params;
    const filteredPokemon = byType(type);
    res.send(filteredPokemon);
});

app.listen(PORT, () => {
    console.log(`Started pokedex-cicd on port ${PORT}`);
});