const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class CourseController {

    //[Get] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({})


        if(req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column] : req.query.type, 
            })
        }
        
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => {
            res.render('me/stored-courses', {courses: multipleMongooseToObject(courses), deletedCount: deletedCount})
        })
        .catch(next)
    }

    //[Get] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
        .then(courses => {
            res.render('me/trash-courses', {courses: multipleMongooseToObject(courses)})
        })
    }
    
}

module.exports = new CourseController
