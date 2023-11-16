const router = require('express').Router();

// server route /api/thoughts

const {
	getThoughts,
	createThought,
	getSingleThought,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction,
} = require('../../controllers/thoughtController.js');

router.route('/')
	.get(getThoughts)
	.post(createThought);

router.route('/:userId')
	.get(getSingleThought)
	.put(updateThought)
	.delete(deleteThought);

router.route('/:userId/friends/:friendId')
	.post(addReaction)
	.delete(deleteReaction);

module.exports = router;
