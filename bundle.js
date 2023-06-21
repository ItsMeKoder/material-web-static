// Bundle each file under output path seperately using rollup
// and generate a single bundle file for each file
// --------------------------------------------------------
const terser = require('@rollup/plugin-terser');
const path = require('path');
const rollup = require('rollup');
const commander = require('commander');
const fs = require('fs');
const { exit } = require('process');
const resolve = require('@rollup/plugin-node-resolve').default;
commander
  .version('0.1.0')
  .description('Bundle each file under output path seperately using rollup and generate a single bundle file for each file')
  .usage('[OPTIONS]...')
  .option('-o, --output <path>', 'Path to store the bundled files.', "./bundled")
  .option('-i, --input <path>', 'Path where the files to be bundled are stored.', "./toBundle")
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

function bundleMWOneFile() {
  filePath = path.join(inputPath, "material.js");
  if (shouldMinify) {
    bundlePath = path.join(outputPath, "material.min.js");
    console.log(`Bundling and minifying ${inputPath}` + `/material.js to ` + outputPath + `/material.min.js`);
  }
  else {
    bundlePath = path.join(outputPath, "material.js");
    console.log(`Bundling ${inputPath}` + `/material.js to ` + outputPath + `/material.js`);
  }
  async function bundleFile() {
    const bundle = await rollup.rollup({
      input: filePath,
      plugins: [resolve(), shouldMinify && terser()]
    });
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
  }
  bundleFile();
  return;
}
function bundleMWAOneFile() {
  filePath = path.join(inputPath, "material-additions.js");
  if (shouldMinify) {
    bundlePath = path.join(outputPath, "material-additions.min.js");
    console.log(`Bundling and minifying ${inputPath}` + `/material-additions.js to ` + outputPath + `/material-additions.min.js`);
  }
  else {
    bundlePath = path.join(outputPath, "material-additions.js");
    console.log(`Bundling ${inputPath}` + `/material-additions.js to ` + outputPath + `/material-additions.js`);
  }
  async function bundleFile() {
    const bundle = await rollup.rollup({
      input: filePath,
      plugins: [resolve(), shouldMinify && terser()]
    });
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
  }
  bundleFile();
  return;
}
if (isOneFile) {
  if (fs.existsSync(path.join(inputPath, "material.js"))) {
    bundleMWOneFile();
    if (fs.existsSync(path.join(inputPath, "material-additions.js"))) {
      bundleMWAOneFile();
    } else {
      console.error("No material-additions.js file found.");
      return;
    }
  } else if (fs.existsSync(path.join(inputPath, "material-additions.js"))) {
    bundleMWAOneFile();
  }
  else {
    console.error("No file found.\nHint: Did you run generate.js --one-file first?");
    return;
  }
}
else {
  fs.readdir(inputPath, (err, files) => {
    if (err) {
      console.error(err + "\n\nHint: Did you run generate.js first?")
      return;
    }
    if (shouldMinify) {
      if (files.length === 2) {
        if ('material.js' && 'material-additions.js' in files) {
          console.log(files.length - 2)
          if (files.length - 2 === 0) {
            console.error("No files to bundle.\nHint: run with --one-file flag")
            return;
          }
          else {
            console.log(`Bundling and minifying ${files.length - 2} files.`)
            return
          }
        }
      }
      if (files.length === 1) {
        if ("material.js" || "material-additions.js" in files) {
          if (files.length - 1 === 0) {
            console.error("No files to bundle.\nHint: run with --one-file flag")
            return;
          }
          else {
            console.log(`Bundling and minifying ${files.length - 1} files.`)
            return
          }
        }
      }
    }
    else {
      if (files.length === 2) {
        if ('material.js' && 'material-additions.js' in files) {
          console.log(files.length - 2)
          if (files.length - 2 === 0) {
            console.error("No files to bundle.\nHint: run with --one-file flag")
            return;
          }
          else {
            console.log(`Bundling ${files.length - 2} files.`)
            return
          }
        }
      }
      if (files.length === 1) {
        if ("material.js" || "material-additions.js" in files) {
          if (files.length - 1 === 0) {
            console.error("No files to bundle.\nHint: run with --one-file flag")
            return;
          }
          else {
            console.log(`Bundling ${files.length - 1} files.`)
            return
          }
        }
      }

    }
    files.forEach(async file => {
      if (file === "material.js") {
        if (isVerbose) {
          console.log("Found material.js, won't compile it.")
        }
        return;
      }
      if (file === "material-additions.js") {
        if (isVerbose) {
          console.log("Found material-additions.js, won't compile it.")
        }
        return;
      }
      const filePath = path.join(inputPath, file);
      let bundlePath;
      if (isVerbose) {
        console.log(`Bundling ${filePath}`);
      }
      const bundle = await rollup.rollup({
        input: filePath,
        plugins: [resolve(), shouldMinify && terser()]
      });
      if (shouldMinify) {
        bundlePath = path.join(outputPath, `${file.split('.')[0]}.min.js`);
      }
      else if (!shouldMinify) {
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
}