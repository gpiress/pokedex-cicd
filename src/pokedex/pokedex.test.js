import { all, byType } from "./pokedex.js";

describe("all", () => {
    it("should return all pokemons", () => {
        const allPokemon = all();

        expect(allPokemon).toHaveLength(9);
        const names = allPokemon.map((pkmn) => pkmn.name);

        expect(names).toContain("charmander");
        expect(names).toContain("squirtle");
        expect(names).toContain("bulbasaur");
    });
});

describe("by type", () => {
    it("should return all fire pokemons", () => {
        const firePokemon = byType("fire");

        expect(firePokemon).toHaveLength(3);
        const names = firePokemon.map((pkmn) => pkmn.name);

        expect(names).toContain("charmander");
        expect(names).toContain("charmeleon");
        expect(names).toContain("charizard");
        expect(names).not.toContain("squirtle");
        expect(names).not.toContain("bulbasaur");
    });
});