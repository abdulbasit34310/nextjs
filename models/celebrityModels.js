const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
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

export default mongoose.models.celebritySchema || mongoose.model("celebritySchema", celebritySchema);
