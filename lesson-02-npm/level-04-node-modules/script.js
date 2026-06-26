// In script.js, import cpus, totalmem, freemem, machine, and platform from node:os.

import { cpus } from "node:os";
import { totalmem } from "node:os";
import { machine } from "node:os";
import { platform } from "node:os";

// Use those functions and save their return values in descriptive variables.

const cpuInfo = cpus();
const totalmemInfo = totalmem();
const machineInfo = machine();
const platformInfo = platform();

// Use console.log to display the value of each variable.

console.log(cpuInfo);
console.log(totalmemInfo);
console.log(machineInfo);
console.log(platformInfo);

// In the terminal, navigate to this folder and run script.js

// In script.js, import resolve and parse from node:path.

import { parse } from "node:path";
import { resolve } from "node:path";

// Use the functions and save their return values in descriptive variables.

const pathParts = parse(filepath);
const filepath = resolve("./script.js");

// Use console.log to display the value of each variable.

console.log(pathParts);
console.log(filepath);
