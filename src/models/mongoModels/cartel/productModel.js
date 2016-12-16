import mongoose from 'mongoose';

let productSchema = new mongoose.Schema({
    id: Number,
	artist: String,
    album_title: String,
    genre: String,
    record_label: String,
    price: {
        gbp: Number,
        eur: Number,
        usd: Number
    },
	release_data: Date
});

let productModel = mongoose.model('cartel_products', productSchema);

export function getAllProducts(callback) {
    productModel.find({}).exec((err, docs) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}

export function getProductsByParam(param, value, callback) {
    productModel.find({[param]: value}).exec((err, docs) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}