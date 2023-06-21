const fs = require('fs');
const path = require('path');

function generateMWImportFiles(outputPath, isOneFile) {
    const packagePath = './node_modules/@material/web';
    const components = fs.readdirSync(packagePath);
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
        console.log(`Folder created at ${outputPath}`);
    }
    if (isOneFile) {
        filePath = path.join(outputPath, "material.js");
        fs.writeFileSync(filePath, "");
        console.log(`File created at ${filePath}`);
    }
    let bundleString = '';
    components
        .filter(component => fs.statSync(path.join(packagePath, component)).isDirectory())
        .forEach(component => {
            if (component === 'tokens') {
                return;
            }
            if (component === 'internal') {
                return;
            }
            if (component === 'labs') {
                return;
            }
            if (component === 'docs') {
                return;
            }
            if (component === 'catalog') {
                return;
            }
            if (component === '.git') {
                return;
            }
            if (component === 'node_modules') {
                return;
            }
            if (component === '.github') {
                return;
            }
            if (component === '.wireit') {
                return;
            }
            const folderPath = path.join(packagePath, component);
            const files = fs.readdirSync(folderPath);
            const componentImports = files
                .filter(file => path.extname(file) === '.js')
                .filter(file => !file.includes('test'))
                .filter(file => file !== 'harness.js')
                .map(file => `import '${path.join(folderPath, file).replace('node_modules/', '')}';`)
                .join('\n');
            if (isOneFile) {
                bundleString += componentImports;
                // console.log(componentImports)
            }
            else {
                const filePath = `${outputPath}/${component}.js`;
                fs.writeFileSync(filePath, componentImports);
                console.log(`Imports for ${component} saved to ${filePath}`);
            }
        });
    if (isOneFile) {
        fs.writeFileSync(filePath, bundleString);
    }

    const labsPath = path.join(packagePath, 'labs');
    const labComponents = fs.readdirSync(labsPath);
    labComponents
        .filter(labComponents => fs.statSync(path.join(labsPath, labComponents)).isDirectory())
        .forEach(labComponents => {
            const folderPath = path.join(labsPath, labComponents);
            const files = fs.readdirSync(folderPath);
            const scomponentImports = files
                .filter(file => path.extname(file) === '.js')
                .filter(file => file !== 'harness.js')
                .filter(file => !file.includes('test'))
                .map(file => `import '${path.join(folderPath, file).replace('node_modules/', '')}';`)
                .join('\n');
            if (isOneFile) {
                bundleString += scomponentImports;
            }
            else {
                const filePath = `toBundle/${labComponents}.js`;
                fs.writeFileSync(filePath, scomponentImports);
                console.log(`Imports for ${labComponents} saved to ${filePath}`);
            }
        });
    if (isOneFile) {
        fs.writeFileSync(filePath, bundleString);
    }
}
function generateMWAImportFiles(outputPath,isOneFile) {
    if (isOneFile) {
        filePath = path.join(outputPath, "material-additions.js");
        fs.writeFileSync(filePath, "");
        console.log(`File created at ${filePath}`);
    }
    let bundleString = '';
    const packagePath = './node_modules/@maicol07/material-web-additions';
    const components = fs.readdirSync(packagePath);
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
        console.log(`Folder created at ${outputPath}`);
    }
    components
        .filter(component => fs.statSync(path.join(packagePath, component)).isDirectory())
        .forEach(component => {
            if (component === 'tokens') {
                return;
            }
            if (component === 'internal') {
                return;
            }
            if (component === 'labs') {
                return;
            }
            if (component === 'docs') {
                return;
            }
            if (component === '.git') {
                return;
            }
            if (component === 'node_modules') {
                return;
            }
            if (component === '.github') {
                return;
            }
            if (component === '.wireit') {
                return;
            }
            const folderPath = path.join(packagePath, component);
            const files = fs.readdirSync(folderPath);
            const componentImports = files
                .filter(file => path.extname(file) === '.js')
                .filter(file => file !== 'harness.js')
                .filter(file => !file.includes('test'))
                .map(file => `import '${path.join(folderPath, file).replace('node_modules/', '')}';`)
                .join('\n');
            if (isOneFile) {
                bundleString += componentImports;
            }
            else {
                const filePath = `${outputPath}/${component}.js`;
                fs.writeFileSync(filePath, componentImports);
                console.log(`Imports for ${component} saved to ${filePath}`);
            }
        });
    if (isOneFile) {
        fs.writeFileSync(filePath, bundleString);
    }
}

if ("--additions" in process.argv) {
    generateMWImportFiles("toBundle");
    generateMWAImportFiles("toBundle");
}
else if ("--output" in process.argv) {
    if (process.argv[process.argv.indexOf("--output") + 1] == null) {
        console.log("Please specify an output path");
    }
    generateMWImportFiles(process.argv[process.argv.indexOf("--output") + 1]);
}

const commander = require('commander');

commander
    .version('0.1.0', '-v, --version')
    .usage('[OPTIONS]...')
    .description('Generate import files for Material Web')
    .option('-o, --output <value>', '/path/to/output/folder', 'toBundle')
    .option('-a, --additions', 'Include Material Web Additions')
    .option('-O, --one-file', 'Generate one file for all components')
    .parse(process.argv);

const options = commander.opts();
console.log(options)

if (options.additions) {
    generateMWImportFiles(options.output, options.oneFile);
    generateMWAImportFiles(options.output, options.oneFile);
}
else {
    generateMWImportFiles(options.output, options.oneFile);
} 