import { Schema, model, models } from "mongoose";


const DetailSchema = new Schema({
  name: String,
  password: String,
})

const detailModel = models.data || model("data", DetailSchema, "data")

export { detailModel }
