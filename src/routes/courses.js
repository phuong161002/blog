const express = require('express')
const router = express.Router()
const CourseController = require('../app/controllers/CourseController')

router.post('/store', CourseController.store)
router.get('/create', CourseController.create)
router.post('/handle-form-actions', CourseController.handleFormActions)
router.get('/:id/edit', CourseController.edit)
router.put('/:id', CourseController.update)
router.patch('/:id/restore', CourseController.restore)
router.delete('/:id/force', CourseController.forceDelete)
router.delete('/:id', CourseController.delete)
router.get('/:slug', CourseController.show)

module.exports = router;