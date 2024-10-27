const express = require('express');
const router = express();
const {create} = require('./controller');

const upload = require('../../../middlewares/multer');
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth');



router.post('/images', upload.single('avatar'), authenticateUser, authorizeRoles('organizer') ,create);



module.exports = router;