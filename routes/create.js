let express = require('express');
let router = express.Router();

router.get("/", (req, res) => {
    res.send("Create Base Route");
});

router.get("/nickname", (req, res) => {
    res.json("Create NickName Route");
});

// router.post();

// router.put();

// router.delete();

module.exports = router;