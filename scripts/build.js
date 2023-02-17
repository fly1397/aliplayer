import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { rmSync } from 'fs'
import Chalk from 'chalk'
import * as Vite from 'vite'

import compileTs from './tsc.js'
import createPackage from './package.js'



const __dirname = dirname(fileURLToPath(import.meta.url))

function buildRenderer() {
    return Vite.build({
        configFile: join(__dirname, '..', 'vite.config.js'),
        base: './',
        mode: 'production'
    });
}

function buildMain() {
    const mainPath = join(__dirname, '..', 'src', 'main');
    return compileTs(mainPath);
}

rmSync(join(__dirname, '..', 'build'), {
    recursive: true,
    force: true,
})

console.log(Chalk.blueBright('Transpiling renderer & main...'));
Promise.allSettled([
    buildRenderer(),
    buildMain(),
]).then(() => {
    createPackage()
    console.log(Chalk.greenBright('Renderer & main successfully transpiled! (ready to be built with electron-builder)'));
});