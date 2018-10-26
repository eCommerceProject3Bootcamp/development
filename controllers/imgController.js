const db = require('../models');
const Jimp = require('jimp');
module.exports = {
    imgResize: async function(req, res) {
        let options = { width: 100, height: 100, responseType: 'base64' };
        let picArray = [];
        if (req.files.pics[0] === undefined) {
            picArray.push(req.files.pics);
        } else {
            picArray = req.files.pics;
        }
        try {
            let retArray = picArray.map(async eachFile => {
                let pic = await Jimp.read(eachFile.data);
                return pic;
            });
            Promise.all(retArray).then(retArray => res.send(retArray));
        } catch (err) {
            console.log(err);
        }
    },
};
