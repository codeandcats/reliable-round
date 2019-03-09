import * as fs from 'fs';
import { rootPath } from 'get-root-path';
import * as path from 'path';

const filesToCopy = ['package.json', 'README.md'];

filesToCopy.forEach((fileName) => {
  const sourceFileName = path.join(rootPath, `./${fileName}`);
  const destinationFileName = path.join(rootPath, `./dist/${fileName}`);
  fs.copyFileSync(sourceFileName, destinationFileName);
});

const packageJson = fs.readFileSync(path.join(rootPath, './dist/package.json'), 'utf8');
const packageObject = JSON.parse(packageJson);

delete packageObject.private;
delete packageObject.scripts;
delete packageObject.devDependencies;
delete packageObject.husky;

fs.writeFileSync(
  path.join(rootPath, './dist/package.json'),
  JSON.stringify(packageObject, null, '  '),
  'utf8'
);
