api = apimock;
var run=(function(){
  var nameAuthor;
  var listBlue = [];

  var cambiarNombre = function(author) {
    nameAuthor = author;
  };

  var actualizar = function(author) {
    cambiarNombre(author);
    $("#authorname").text(author);
    api.getBlueprintsByAuthor(author);
  };


  return {
    actualizar: actualizar,

  };
})();