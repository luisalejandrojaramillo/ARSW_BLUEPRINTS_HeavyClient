const Url = 'http://localhost:8080/blueprints/';
apiclient = (function () {
    var f=[]

    var getBlueprintsByAuthor = function(author,callback){
          var valid = jQuery.ajax({
            url: Url + author,
            success: function(result) {
              callback(result);
            },
            async: true
          });
          valid.then(
            function() {
              console.info("OK ");
            },
            function() {
              alert("The author is not found " + name);
            }
          );
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

    var setBlueprint = function (author,name,blueprint) {
        var valid = $.ajax({
            url: Url + author + '/' + name + '/',
            type: 'PUT',
            data: blueprint,
            contentType: "application/json"
        });
        valid.then(
            function() {
                console.info("OK");
            },
            function() {
                alert("Error saving plan");
            }
        );
    }

    return {
        getBlueprintsByAuthor: getBlueprintsByAuthor,
		getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor,
        setBlueprint: setBlueprint
    };
})();