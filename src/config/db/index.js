const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f8_education_dev');
        console.log('Connect Successfully')
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = {connect}