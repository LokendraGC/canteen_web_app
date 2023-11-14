import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:60
    },
    desc:{
        type:String,
        required:true,
        maxlength:200
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    extraOptions:{
        type:[{
            text:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }]
    }

},{
    timestamps:true
}
)

export const Product =  mongoose.models.products|| mongoose.model("products",productSchema)   
