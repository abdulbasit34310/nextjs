const mongoose = require("mongoose");

const watchAppearanceSchema = new mongoose.Schema({
    celebrity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Celebrity",
        required: true
    },
    watch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Watch",
        required: true
    },
    pictureUrl: {
        type: String,
        required: false
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("listModels", watchAppearanceSchema);