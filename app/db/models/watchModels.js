const mongoose = require("mongoose");

const watchModels = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, "Type Watch Brand"]
    },
    model: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
export default mongoose.model("watchModels", watchModels);