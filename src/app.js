const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.use(express.json())

app.get("/musicians",  async (req, res) => {
    const musicians = await Musician.findAll()
    res.json(musicians);
});


app.get("/musicians/:id", async (req, res) => {
        const parameter = req.params.id
        const musician = await Musician.findByPk(parameter)
        res.json(musician)
        }
    )



module.exports = app;