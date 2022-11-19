const router = require('express').Router();


const {
  getAllThought,
  addThought,
  addReaction,
  removeReaction,

} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);


router.route('/:userId').post(addThought);



router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;