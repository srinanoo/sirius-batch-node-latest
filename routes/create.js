let express = require('express');
let router = express.Router();

const createController = require('../controllers/createController');
router.get("/", createController.createDetails); // http://localhost:4000/create

router.get("/nickname", createController.createNickName); // http://localhost:4000/create/nickname

// router.post();

// router.put();

// router.delete();

module.exports = router;