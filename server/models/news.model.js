const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema(
    {
        title: { type: String, required: true},
        description: {type: String, required: true},
        content: { type: String, required: true},
        date: { type: Date, default: Date.now()},
        author: { type: String, required: true, default: "Anonymus"},
        archiveDate: {type: Date, default: null}
    },
    { timestamp: true }
);

const News = mongoose.model('news', newsSchema);

module.exports = News;