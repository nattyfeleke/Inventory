const router = require('express').Router();
let Purchase = require('../models/purchase.model');

router.route('/').get((req, res)=> {
    Purchase.find().then(purchases => res.json(purchases)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const s_no= Number(req.body.s_no);
    const des= req.body.des;
    const tag_no= Number(req.body.tag_no);
    const serial= req.body.serial;
    const po_no= Number(req.body.po_no);
    const grn_no= Number(req.body.grn_no);
    const date= Date.parse(req.body.date);

    const newPurchase= new Purchase({
        s_no,
        des,
        tag_no,
        serial,
        po_no,
        grn_no,
        date,    
    });

    newPurchase.save()
      .then( () => res.json('Purchase added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Purchase.findById(req.params.id)
        .then(purchase => res.json(purchase))
        .catch(err => res.status(400).json("Error : " + err));
});
router.route('/:id').delete((req, res) => {
    Purchase.findByIdAndDelete(req.params.id)
        .then(() => res.json('Purchase deleted!'))
        .catch(err => res.status(400).json("Error : " + err));
});

router.route('/update/:id').post((req, res) => {
    Purchase.findById(req.params.id)
        .then(purchase => {
            purchase.s_no = Number(req.body.s_no);
            purchase.des = req.body.des;
            purchase.tag_no = Number(req.body.tag_no);
            purchase.serial = req.body.serial;
            purchase.po_no = Number(req.body.po_no);
            purchase.grn_no = Number(req.body.grn_no);
            purchase.date = Date.parse(req.body.date);

            purchase.save()
                .then(() => res.json('Purchase updated!'))
                .catch(err => res.status(400).json("Error : " + err));
        })
        .catch(err => res.status(400).json("Error : " + err));
});

module.exports= router;