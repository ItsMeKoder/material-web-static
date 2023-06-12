// Bundle each file under output path seperately using rollup
// and generate a single bundle file for each file
// --------------------------------------------------------
const terser = require('@rollup/plugin-terser');
const path = require('path');
const commander = require('commander');
const fs = require('fs');
commander
  .version('0.1.0')
  .description('Bundle each file under output path seperately using rollup and generate a single bundle file for each file')
  .usage('[OPTIONS]...')
  .option('-o, --output <path>', 'Path to store the bundled files.',"./bundled")
  .option('-i, --input <path>', 'Path where the files to be bundled are stored.',"./toBundle")
  .option('-m, --minify', 'Minify the bundled files.')
  .option('-v, --verbose', 'Show verbose output.')
  .option('-O, --one-file', 'Bundle all files into a single file.')
  .parse(process.argv);

const options = commander.opts();
const inputPath = options.input;
const outputPath = options.output;
const shouldMinify = options.minify;
const isVerbose = options.verbose;
const isOneFile = options.oneFile;

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
    console.log(`Folder created at ${outputPath}`);
}

// Get all files in the output path
fs.readdir(inputPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const rollup = require('rollup');
  const resolve = require('@rollup/plugin-node-resolve').default;
  if (shouldMinify && isOneFile) {
    console.log(`Bundling and minifying ${files.length} files into 1 file.`)
  }
  else if (shouldMinify) {
    console.log(`Bundling and minifying ${files.length} files.`)
  }
  else if (isOneFile) {
    console.log(`Bundling ${files.length} files into 1 file.`)
  }
  else {
    console.log(`Bundling ${files.length} files.`)
  }
  // Bundle each file separately using Rollup
  files.forEach(async file => {
    const filePath = path.join(inputPath, file);
    let bundlePath;
    if (isVerbose) {
      console.log(`Bundling ${filePath}`);
    }
    const bundle = await rollup.rollup({
      input: filePath,
      plugins: [resolve(), shouldMinify && terser()]
    });
    if (isOneFile) {
      bundlePath = path.join(outputPath, 'material.js');
    }
    else if (shouldMinify){
      bundlePath = path.join(outputPath, `${file.split('.')[0]}.min.js`);
    }
    else if (!shouldMinify){
      bundlePath = path.join(outputPath, `${file}`);
    }
    if (isVerbose) {
      console.log(`Bundled ${filePath}`);
      console.log(`Writing ${filePath} to ${bundlePath}.`);
    }
    await bundle.write({
      file: bundlePath,
      format: 'iife'
    });
    if (isVerbose) {
      console.log(`Written ${filePath} to ${bundlePath}.`);
    }
  });
})