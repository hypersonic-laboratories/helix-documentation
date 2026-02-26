const path = require('path');

const scripts = [
  "core",
  "menus",
  "gameplay"
];

const basePath = path.join(__dirname, "js");

Utils.loadScripts(basePath, scripts);
