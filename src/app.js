const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))


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

    app.post("/musicians", async (req, res) => {
        const musician = await Musician.create(req.body)
         res.json( musician )
     })

     app.put("/musicians/:id", async (req, res) => {
        const updatedMusician = await Musician.update(req.body, {where: {id: req.params.id}})
        res.json({ updatedMusician })
    })

    app.delete("/musicians/:id", async (req, res) => {
        const deletedMusician = await Musician.destroy({where: {id: req.params.id}})
        res.json( { deletedMusician })
    })

module.exports = app;