const mongoose = require("mongoose");
const { stringify } = require("querystring");

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
        heading: {
            type: String,
            required:true
        },
        Products:[{
            item:{
                type: String,
                 required:true
                 },
            price:{
                type: String,
                required:true
                 }
            }]
            // items:[{
            //     type:String,
            //     required: true
            // }],
            // price:[{
            //     type:Number,
            //     required:true
            // }]
    

    });
     
    module.exports = mongoose.model("product", ProductSchema); 