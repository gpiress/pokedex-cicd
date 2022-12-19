import { readFileSync } from "fs";

const pokemon = JSON.parse(
    readFileSync("./data/pokemon.json", { encoding: "utf8" })
);

export const all = () => {
    return pokemon;
};

export const byType = (desiredType) => {
    const filtered = pokemon.filter((pkmn) => pkmn.type === desiredType);

    return filtered;
};
