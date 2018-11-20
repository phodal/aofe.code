let fs = require('fs-extra')
let projects = ['reports', 'settings', 'dashboard'];

for (let index in projects) {
  let project = projects[index];
  let originModulePath = './src/app/' + project;
  fs.removeSync(originModulePath);
  fs.copy('../' + project + '/src/app/' + project, originModulePath)
    .then(() => console.log('copy project: ' + project + ' success!'))
    .catch(err => console.error(err));
}
