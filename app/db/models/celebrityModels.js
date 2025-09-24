const mongoose = require("mongoose");

const celebrityModels = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Type Celebrity Name"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema",
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("celebrityModels", celebrityModels);