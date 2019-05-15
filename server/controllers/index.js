const express = require ('express');
const router = express.Router();

const start = require('../models/start');
const pgup  = require('../models/pgup');
const pgdn  = require('../models/pgdn');
const card  = require('../models/card');

router.get('/start', (req, res) => {
  res.json(start())
});
router.get('/pgup', (req, res) => {
  res.json(pgup())
});
router.get('/pgdn', (req, res) => {
  res.json(pgdn())
});
router.get('/card', (req, res) => {
  res.json(card(req))
});
module.exports = router;
