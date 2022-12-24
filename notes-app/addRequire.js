// https://stackoverflow.com/questions/31931614/require-is-not-defined-node-js

import { createRequire } from "module";
const require = createRequire(import.meta.url);

global.require = require; //this will make require at the global scobe and treat it like the original require
