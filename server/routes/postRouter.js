const router = require('express').Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);
router.get('/:id', postsController.getPost);
router.patch('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);
router.patch('/:id/like', postsController.likePost);

module.exports = router;
