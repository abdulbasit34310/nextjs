const mongoose = require("mongoose");

const cetegoryModels = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Type Celebrity Category Name"],
        unique: true
    }
}, {
    timestamps: true
});

export default mongoose.model("cetegoryModels", cetegoryModels);