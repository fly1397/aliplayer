
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { writeFile } from 'fs'
import PACKAGE_JSON from '../package.json' assert { type: 'json' }

const __dirname = dirname(fileURLToPath(import.meta.url))
export default function createPackage()  {
    const APP_PATH = join(__dirname,'..', 'build', 'main');
    const NEW_PACKAGE_JSON = {
        name: PACKAGE_JSON.name,
        main: 'main.js',
        author: PACKAGE_JSON.author,
        version: PACKAGE_JSON.version,
        description : PACKAGE_JSON.description,
        dependencies: {
        },
    };
    return new Promise((resolve) => {
        writeFile(join(APP_PATH, 'package.json'), JSON.stringify(NEW_PACKAGE_JSON, null, 2), resolve);
    })
    
}