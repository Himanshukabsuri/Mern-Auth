import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { dbName: "local" })
        console.log("Connected")
    } catch (error) {
        process.exit(1)
    }
}

export default connectDB