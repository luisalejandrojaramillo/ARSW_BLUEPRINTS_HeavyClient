const Url = 'http://localhost:8080/blueprints/';
apiclient = (function () {
    var f=[]

    var getBlueprintsByAuthor = function(author,callback){
       $.ajax({
            dataType: "json",
            url: Url+author,
            success: function (data) {
                callback(data)
            }
        });
    }

    var getBlueprintsByNameAndAuthor = function(author,name,callback){
        $.ajax({
            dataType: "json",
            url: Url+author+'/'+name,
            success: function (data) {
                callback(data)
            }
        });
    }

    return {
        getBlueprintsByAuthor: getBlueprintsByAuthor,
		getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor
    };
})();