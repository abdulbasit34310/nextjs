const mongoose = require("mongoose");

const cetegorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Type Celebrity Category Name"],
        unique: true
    }
}, {
    timestamps: true
});

export default mongoose.models.cetegorySchema || mongoose.model("cetegorySchema", cetegorySchema);