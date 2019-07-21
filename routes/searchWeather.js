const router = require('express').Router();

router.get('/:searchTerm', (req, res) => {
	const searchTerm = req.params.searchTerm;

	

	res.status(200).json({ username: 'username', email: 'email' });
});
 
module.exports = router;