const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Account = new Schema({
    username: { type: String, require: true, },
    password: { type: String},
    server: { type: Number},
    gender: { type: Number },
}, {
    timestamps: true,
})

mongoose.plugin(slug)
mongoose.plugin(mongoose_delete, {
    overrideMethods: 'all', deletedAt: true
})

module.exports = mongoose.model('Account', Account)