module.exports = function (source) {
  var template = /<template[\s\S]*?>[\s\S]*?<([a-zA-Z]*)[\s\S]*?>([\s\S]*?)<\/template>/g
  var templates = template.exec(source);
  const res = `var element = document.createElement('${templates[1]}');
  element.innerHTML = \`${templates[2]}\`;
  let component = niepan(element);`;
  return `${res}module.exports = component;`;
}
