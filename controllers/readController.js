const logger = require('../logger');
const fs = require('fs');

const readAllDetails = (req, res) => {

    // fetch('')
    //     .then(dat=> console.log())
    //     .catch(err => {
    //         logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    //     });

    try {
        fs.readFile("./sample.json", 'UTF-8', (err, data) => {
            if(err) {
                logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
                res.status(500).send("File Not Found");
            }
            else
                res.send("File Found");
        })
    } catch(err) {
        console.log(err);
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

        res.status(500).send("File Not Found");
    }
    // res.send("For All the Details");
};

const readSpecificDetails = (req, res) => {
    res.send(req.params.id);
};

module.exports = {
    readAllDetails,
    readSpecificDetails
}