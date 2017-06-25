const connClose = function(request, response, next){
    response.set("Connection", "close");
    next();
}

module.exports = connClose;