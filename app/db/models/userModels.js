const mongoose = require("mongoose");

const userModels = mongoose.Schema({
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

export default mongoose.model("userModels", userModels);