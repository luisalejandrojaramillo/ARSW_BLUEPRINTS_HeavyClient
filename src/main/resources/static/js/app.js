
var Run=(function(){
  var nameAuthor;
  var listBlue = [];

  var cambiarNombre = function(author) {
    nameAuthor = author;
  };

  var actualizar = function(author) {
    cambiarNombre(author);
    $("#authorname").text(author);

  };
})