const router = require("express").Router();
const pokemonRouter = require("./pokemonRouter");
const myPokemonRouter = require("./myPokemonRouter");

router.use("/pokemon", pokemonRouter);
router.use("/myPokemon", myPokemonRouter);

module.exports = router;
