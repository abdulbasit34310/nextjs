const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Type Name"]
    },
    email: {
        type: String,
        required: [true, "Type Email"]
    },
    phone: {
        type: String,
        required: [true, "Type Phone"]
    }
}, {
    timestamps: true
});

export default mongoose.model("userSchema", userSchema);