const router = require("express").Router();
const pokemonController = require("../controllers");

router.get("/", pokemonController.getAllMyPokemon);
router.get("/:id", pokemonController.getDetailMyPokemon);
router.post("/:id", pokemonController.releasePokemon);
router.patch("/:id", pokemonController.renamePokemon);

module.exports = router;
