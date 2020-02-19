const router = require('express').Router();
let Inventory = require('../models/inventory.model');

router.route('/').get((req, res)=> {
    Inventory.find().then(inventory => res.json(inventory)).catch(err => res.status(400).json('Error: ' + err));
});
