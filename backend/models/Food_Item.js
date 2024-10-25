const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const FoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        unique: false,
    },
    Creator: {
        type: Schema.Types.ObjectId,
        ref: "Vendor",
        required: true,
    },
    shop_name:{
        type:String,
        required:true
    },
    rating: {
        type: Number,
        default: 0
    },
    rated_order :{
        type: Number,
        default: 0
    },
    orders :{
        type: Number,
        default: 0
    },
    completed_orders :{
        type:Number,
        default:0
    },
    rejected_orders :{
        type:Number,
        default:0
    },
    VegORnot: {
        type: String,
        enum: ["Veg", "Non Veg"],
        required: true
    },
    tags: {
        type: [String]
    },
    Addon: [
            {
                Item: {
                    type: String
                },
                Price: {
                    type: Number
                }
            }
        ]
});

module.exports = User = mongoose.model("Food_Items", FoodSchema);