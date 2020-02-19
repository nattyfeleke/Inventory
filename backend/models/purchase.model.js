const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    s_no:{type: Number, required: true},
    des:{type: String, required: true},
    tag_no:{type: Number, required: true},
    serial:{type: String, required: true , unique : true },
    po_no:{type: Number, required: true},
    grn_no:{type: Number, required: true},
    date:{type: Date, required: true},
    },{
        timestamps: true,
    });

    const Purchase = mongoose.model('Purchase', purchaseSchema);
    
    module.exports = Purchase;