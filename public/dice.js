(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dice'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"square\"></div>\n<img class=bennyPicture src=\"https://web.engr.oregonstate.edu/~perezalj/Benny/Beaver\" alt=\"Benny\">\n<div>\n	<button class=\"roll-button\">ROLL!</button>\n</div>\n<div class=\"roll-results\"></div>\n<div class=timeBox></div>\n\n";
},"useData":true});
})();