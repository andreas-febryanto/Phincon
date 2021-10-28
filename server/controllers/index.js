const { Favorite } = require("../models");
const instance = require("../apis/axios");
const isPrime = require("../helpers/isPrime");
const renameFibo = require("../helpers/renamePokemon");

class pokemonController {
  static getAllPokemon = async (req, res) => {
    try {
      const pokemons = [];
      for (let i = 1; i <= 10; i++) {
        const allPokemon = await instance.get(`pokemon/${i}`);
        const obj = {
          id: allPokemon.data.id,
          name: allPokemon.data.name,
          img: allPokemon.data.sprites.other["official-artwork"].front_default,
        };
        pokemons.push(obj);
      }
      res.status(200).json(pokemons);
    } catch (error) {
      console.log(error);
    }
  };

  static getDetailPokemon = async (req, res) => {
    try {
      const pokemonId = +req.params.id;
      const result = await instance.get(`pokemon/${pokemonId}`);
      const pokemon = {
        id: result.data.id,
        name: result.data.name,
        img: result.data.sprites.other["official-artwork"].front_default,
        types: result.data.types,
        moves: result.data.moves,
      };
      res.status(200).json(pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  static catchPokemon = async (req, res) => {
    try {
      const { nickname } = req.body;
      console.log(nickname);

      //? logit random should be in front end ?
      // const randomChance = Math.round(Math.random());
      // if (!randomChance) throw { code: 200, name: "Failed to catch pokemon" };

      const pokemonId = +req.params.id;
      const result = await instance.get(`pokemon/${pokemonId}`);
      const pokemon = {
        name: result.data.name,
        rename: 0,
        img: result.data.sprites.other["official-artwork"].front_default,
        type: result.data.types[0].type.name,
        move: result.data.moves[0].move.name,
        nickname,
      };

      await Favorite.create(pokemon);
      res.status(200).json({ message: "Success to catch pokemon", pokemon });
    } catch (error) {
      console.log(error);
      res.status(error.code).json({ message: error.name });
    }
  };

  static getAllMyPokemon = async (req, res) => {
    try {
      const myPokemons = await Favorite.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [["id", "ASC"]],
      });
      res.status(200).json(myPokemons);
    } catch (error) {
      console.log(error);
    }
  };

  static getDetailMyPokemon = async (req, res) => {
    try {
      const pokemonId = +req.params.id;
      const myPokemon = await Favorite.findByPk(pokemonId);
      if (!myPokemon) throw { code: 400, name: "pokemon not found" };

      res.status(200).json(myPokemon);
    } catch (error) {
      res.status(error.code).json({ message: error.name });
    }
  };

  static releasePokemon = async (req, res) => {
    try {
      const randomChance = Math.round(Math.random() * 100);
      const isPrimeNumber = isPrime(randomChance);
      if (!isPrimeNumber)
        throw { code: 400, name: "Failed to release pokemon" };

      const pokemonId = +req.params.id;
      const result = await Favorite.findByPk(pokemonId);
      if (!result) throw { code: 400, name: "pokemon not found" };
      await Favorite.destroy({ where: { id: pokemonId } });

      res.status(200).json({ message: `pokemon succesfully released` });
    } catch (error) {
      res.status(error.code).json({ message: error.name });
    }
  };

  static renamePokemon = async (req, res) => {
    try {
      const pokemonId = +req.params.id;
      const result = await Favorite.findByPk(pokemonId);
      if (!result) throw { code: 400, name: "pokemon not found" };

      const fibo = renameFibo(+result.rename);
      if (!result.rename) result.nickname = `${result.nickname}-${fibo}`;
      result.nickname = `${result.nickname.substring(
        0,
        result.nickname.indexOf("-")
      )}-${fibo}`;
      result.rename = ++result.rename;
      await result.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(error.code).json({ message: error.name });
    }
  };
}

module.exports = pokemonController;
