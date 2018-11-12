import * as fs from 'fs';
import * as path from 'path';
import resolveAppPath = require('resolve-app-path');

const appPath = resolveAppPath();

const filesToCopy = ['package.json', 'README.md'];

filesToCopy.forEach((fileName) => {
  const sourceFileName = path.join(appPath, `./${fileName}`);
  const destinationFileName = path.join(appPath, `./dist/${fileName}`);
  fs.copyFileSync(sourceFileName, destinationFileName);
});

const packageJson = fs.readFileSync(path.join(appPath, './dist/package.json'), 'utf8');
const packageObject = JSON.parse(packageJson);

delete packageObject.private;
delete packageObject.scripts;
delete packageObject.devDependencies;
delete packageObject.husky;

fs.writeFileSync(
  path.join(appPath, './dist/package.json'),
  JSON.stringify(packageObject, null, '  '),
  'utf8'
);
