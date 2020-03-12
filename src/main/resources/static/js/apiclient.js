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

    var setBlueprint = (function (author1,name1,blueprint,callback) {
        var valid = $.ajax({
            url: Url + author1 + '/' + name1 + '/',
            type: 'PUT',
            data: blueprint,
            contentType: "application/json"
        });
        valid.then(
            function() {
                console.info("OK");
				callback(author1)
				
            },
            function() {
                alert("Error saving plan");
            }
        );
		
    })

    var putPointBluePrint = function(name, author, point, callback){
    			console.log(name + " "+ author);
    			bl = f.filter(function (blue) {
    				console.log(blue);
    				if(blue.author == author){
    					console.log(blue.name);
    					if(blue.name == name) return blue;
    				}
    			});
    			console.log(bl);
    			bl[0].points.push(point);
    			callback(author,name);
    		}
	  var delBluePrint = (function(blueprint, callback){
    	var valid = $.ajax({
            url: Url + blueprint.author + '/' + blueprint.name + '/',
            type: 'DELETE'
        });
          valid.then(
            function() {
                console.info("OK");
				callback(author1)
				
            },
            function() {
                alert("Error deleting plan");
            }
        );
	})


    return {
        getBlueprintsByAuthor: getBlueprintsByAuthor,
		getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor,
        setBlueprint: setBlueprint,
        putPointBluePrint: putPointBluePrint,
		delBluePrint: delBluePrint
    };
})();