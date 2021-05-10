const multer = require('multer');
const fileFilter = function(req, file, next){
    const allowedTypes = ["image/png", "image/jpg", "application/pdf"];
    if(!allowedTypes.includes(file.minetype)){
        const error = new Error("Wrong file type");
        error.code = "LITMIT_FILE_TYPES";
        return next(error, false);
    }
    next(null, true)
}
const MAX_SIZE = 2000000;
const upload = multer({
    dest: "../uploads/",
    fileFilter,
    limits: {
        filesize: MAX_SIZE
    }
});
module.exports = {
    upload
}