var express = require('express')
var router = express.Router()
let moviesController = require('../controllers/moviesController')

router.get('/', moviesController.list)

router.get('/drama', moviesController.drama)

router.get('/top', moviesController.top)

router.get('/totalTime', moviesController.totalTime)

router.post('/search', moviesController.search)

router.post('/add', moviesController.create)
router.get('/add', moviesController.add)

router.post('/test', moviesController.test)

router.get('/:id', moviesController.detail)

module.exports = router