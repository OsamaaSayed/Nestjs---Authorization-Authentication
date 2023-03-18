import mongoose from 'mongoose';


export const studentSchema = new mongoose.Schema(
    {

        name: String,
        age: Number,
        coursesIDs: [{ type: mongoose.Types.ObjectId, ref: "Courses" }]

    }
)
