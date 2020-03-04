const Url = 'http://localhost:8080/blueprints/';
apiclient = (function () {
    var f=[]
    return {
		
        getBlueprintsByAuthor: function (author, callback) {
			
           $.ajax({
                dataType: "json",
                url: Url+author,
                success: function (data) {
                    callback(data)
                }
            });
        },
		getBlueprintsByNameAndAuthor: function (author, name, callback) {
            $.ajax({
                dataType: "json",
                url: Url+author+'/'+name,
                success: function (data) {
                    callback(data)
                }
            });
        }


    };
})();