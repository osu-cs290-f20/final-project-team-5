(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dice'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"square\"></div>\r\n<img class=bennyPicture src=\"https://web.engr.oregonstate.edu/~perezalj/Benny/Beaver\" alt=\"Benny\">\r\n<div>\r\n	<button class=\"roll-button\">ROLL!</button>\r\n</div>\r\n<div class=\"roll-results\"></div>\r\n<div class=timeBox></div>\r\n\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"gameDice") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();