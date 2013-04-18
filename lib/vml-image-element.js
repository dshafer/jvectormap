jvm.VMLImageElement = function (config, style) {
  jvm.VMLImageElement.parentClass.call(this, 'image', config, style);

  this.node.style.setAttribute('position', 'relative');
};

jvm.inherits(jvm.VMLImageElement, jvm.VMLShapeElement);

jvm.VMLImageElement.prototype.applyAttr = function (attr, value) {
  switch (attr) {
    case 'href' :
      this.node.setAttribute('src', value);
      break;
    case 'width' :
    case 'height' :
      this.node.style.setAttribute(attr, value);
      break;
    case 'x' :
      this.node.style.setAttribute('left', value);
      break;
    case 'y' :
      this.node.style.setAttribute('top', value);
      break;
    default :
      jvm.VMLImageElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};