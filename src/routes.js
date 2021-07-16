/*const express = require("express")

const routes = express.Router()

const views = __dirname + "/views/"


routes.get('/',(req,res) => res.render(views + "index.ejs"))
module.exports = routes;*/

const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"


routes.get('/',(req,res) => res.render(views + "index.ejs"))
routes.get('/ranking',(req,res) => res.render(views + "ranking.ejs"))
routes.get('/watched',(req,res) => res.render(views + "watched.ejs"))
module.exports = routes;
