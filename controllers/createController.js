const createDetails = (req, res) => {
    res.send("Create Base Route");
};

const createNickName = (req, res) => {
    res.send("Createing NickName");
};

module.exports = {
    createDetails,
    createNickName
};