import mongoose from "mongoose";

const tokensSchema = new mongoose.Schema({
    token: String,
    phone: String,
    isAuth: Boolean
})

export const Token = mongoose.model("Token",tokensSchema)