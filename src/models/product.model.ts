import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  colors: { type: [String] },                     // Array of available colors
  sizes: { type: [String] }                       // Array of available sizes

})

const Product = model('products', productSchema)

export default Product
