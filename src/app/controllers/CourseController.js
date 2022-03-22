const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
const { response } = require('express')

class CourseController {

    //[Get] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    //[Get] courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [Post] courses/store
    store(req, res, next) {
        const formdata = req.body
        formdata.image = `https://img.youtube.com/vi/${formdata.videoId}/sddefault.jpg`
        const course = new Course(formdata)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[Get] courses/:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then(course => {
                res.render('courses/edit', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    //[Put] courses/:id
    update(req, res, next) {
        const formdata = req.body
        formdata.image = `https://img.youtube.com/vi/${formdata.videoId}/sddefault.jpg`
        Course.updateOne({ _id: req.params.id }, formdata)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[Delete] courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[Patch] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[Delete] courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[Post] courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            case 'force-delete':
                Course.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json({ message: 'invalid action' })
        }

    }

}

module.exports = new CourseController
