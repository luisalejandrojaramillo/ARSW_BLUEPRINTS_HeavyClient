const Url = 'http://localhost:8080/blueprints/';
appicliente = (function () {
    var fun=[]
    return {
        getBlueprintsByAuthor: function (name, callback) {
            $.get(Url+name,function(data){
                fun=data;
            });
            return callback(fun)
        }
    };
})();