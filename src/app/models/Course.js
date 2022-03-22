const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Course = new Schema({
    _id : {type: Number},
    name: { type: String, maxLength: 255, require: true, },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
}, {
    _id: false,
    timestamps: true,
})

Course.plugin(AutoIncrement)
mongoose.plugin(slug)
mongoose.plugin(mongoose_delete, {
    overrideMethods: 'all', deletedAt: true
})

module.exports = mongoose.model('Course', Course)