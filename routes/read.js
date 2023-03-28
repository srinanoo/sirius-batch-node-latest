let express = require('express');
let router = express.Router();

const readController = require('../controllers/readController');
router.get("/", readController.readAllDetails); // http://localhost:4000/read

router.get("/:id", readController.readSpecificDetails); // http://localhost:4000/read/1

// router.post();

// router.put();

// router.delete();

module.exports = router;