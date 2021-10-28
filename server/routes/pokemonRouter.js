const router = require("express").Router();
const pokemonController = require("../controllers");

router.get("/", pokemonController.getAllPokemon);
router.get("/:id", pokemonController.getDetailPokemon);
router.post("/:id", pokemonController.catchPokemon);
module.exports = router;
