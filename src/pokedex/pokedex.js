import { readFileSync } from "fs";

const DATA_PATH = new URL("pokemon.json", import.meta.url);
const RAW_DATA = readFileSync(DATA_PATH, { encoding: "utf8" });

const pokemon = JSON.parse(RAW_DATA);

export const all = () => {
    return pokemon;
};

export const byType = (desiredType) => {
    const filtered = pokemon.filter((pkmn) => pkmn.type === desiredType);
    return filtered;
};
