export function NodeToJSON(node: any) {
  // Code base on https://gist.github.com/sstur/7379870
  node = node || this;
  let obj: any = {
    nodeType: node.nodeType
  };
  if (node.tagName) {
    obj.tagName = 'winv-' + node.tagName.toLowerCase();
  } else if (node.nodeName) {
    obj.nodeName = node.nodeName;
  }
  if (node.nodeValue) {
    obj.nodeValue = node.nodeValue;
    if (this.utils.isTemplateTag(node.nodeValue)) {
      obj.nodeValue = this.getData(this.utils.removeTemplateTag(node.nodeValue));
    }
  }
  let attrs = node.attributes;
  if (attrs) {
    let length = attrs.length;
    let arr = obj.attributes = new Array(length);
    for (let i = 0; i < length; i++) {
      let attr = attrs[i];
      arr[i] = [attr.nodeName, attr.nodeValue];
    }
  }
  let childNodes = node.childNodes;
  if (childNodes) {
    length = childNodes.length;
    let arr = obj.childNodes = new Array(length);
    for (let i = 0; i < length; i++) {
      arr[i] = this.nodeToJSON(childNodes[i]);
    }
  }
  return obj;
}
