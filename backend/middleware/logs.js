const logRequest = (req, res, next) => {
    console.log("request : ", req.path);
    next();
}

export default logRequest;
