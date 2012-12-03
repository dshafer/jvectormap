jvm.SVGImageElement = function(config, style){
  var href = config.href;
  delete config.href;
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
  this.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', href);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);
