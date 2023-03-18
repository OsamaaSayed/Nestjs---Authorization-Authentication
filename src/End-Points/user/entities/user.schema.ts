import mongoose from "mongoose";

export let userSchema = new mongoose.Schema(

    {
        name: String,
        age: Number,
        email: String,
        password: String,
        isAdmin: Boolean
    }

)