const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// router.post('/', (req, res) => {
//   res.send('Register Route');
// });

// the above is replace with below because we moved this logic to the controllers file
router.post('/', registerUser);

router.post('/login', loginUser);

module.exports = router;
