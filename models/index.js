const mongoose = require('mongoose');

const mongoDB = () => {

    try {
        mongoose.connect("mongodb+srv://****:****@cluster0.sbcgo.mongodb.net/rentingApp?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }, () =>
            console.log("MongoDB connected"));
    } catch (error) {
        console.log("could not connect MongoDB");
    }
};

module.exports = mongoDB;
