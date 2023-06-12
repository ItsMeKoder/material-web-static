const fs = require('fs');
const path = require('path');

function generateMWImportFiles(outputPath) {
    const packagePath = './node_modules/@material/web';
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
        if (component === 'catalog') {
            return;
        }
        const folderPath = path.join(packagePath, component);
        const files = fs.readdirSync(folderPath);
        const componentImports = files
        .filter(file => path.extname(file) === '.js')
        .filter(file => file !== 'harness.js')
        .map(file => `import '${path.join(folderPath, file).replace('node_modules/','')}';`)
        .join('\n');
        const filePath = `${outputPath}/${component}.js`;
        fs.writeFileSync(filePath, componentImports);
        console.log(`Imports for ${component} saved to ${filePath}`);
    });


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
        .map(file => `import '${path.join(folderPath, file).replace('node_modules/','')}';`)
        .join('\n');
        const filePath = `toBundle/${labComponents}.js`;
        fs.writeFileSync(filePath, scomponentImports);
        console.log(`Imports for ${labComponents} saved to ${filePath}`);
    });
}
function generateMWAImportFiles(outputPath) {
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
            const folderPath = path.join(packagePath, component);
            const files = fs.readdirSync(folderPath);
            const componentImports = files
                .filter(file => path.extname(file) === '.js')
                .filter(file => file !== 'harness.js')
                .map(file => `import '${path.join(folderPath, file).replace('node_modules/','')}';`)
                .join('\n');
            const filePath = `${outputPath}/${component}.js`;
            fs.writeFileSync(filePath, componentImports);
            console.log(`Imports for ${component} saved to ${filePath}`);
        });
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
    .parse(process.argv);

const options = commander.opts();
console.log(options)

if (options.additions) {
    console.log (options.output)
    generateMWImportFiles(options.output);
    generateMWAImportFiles(options.output);
}
else {
    generateMWImportFiles(options.output);
}