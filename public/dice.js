(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dice'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"square\"></div>\r\n<img class=bennyPicture src=\"https://web.engr.oregonstate.edu/~perezalj/Benny/Beaver\" alt=\"Benny\">\r\n<div>\r\n	<button class=\"roll-button\">ROLL!</button>\r\n</div>\r\n<div class=\"roll-results\"></div>\r\n<div class=timeBox></div>\r\n\r\n";
},"useData":true});
})();