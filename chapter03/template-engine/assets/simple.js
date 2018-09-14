// 基于 https://github.com/trix/nano

function nano(template, data) {
  return template.replace(/\{\{([\w\.]*)\}\}/g, function (str, key) {
    var keys = key.split("."), value = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) {
      value = value[keys[i]];
    }
    return (typeof value !== "undefined" && value !== null) ? value : "";
  });
}
