import mongoose from 'mongoose';

import * as sampleData from '../../../data/cartel_products';

export function getAllProducts(callback) {
    return callback(null, sampleData);
}

export function getProductsByParam(param, value, callback) {
    let productReturn;
    for(let product in sampleData.default) {
        if(sampleData.default[product][param] == value) {
             productReturn = sampleData.default[product];
             break;
        }
    }
    return callback(null, productReturn);
}