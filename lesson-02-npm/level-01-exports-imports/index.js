import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);

console.log(
  "\n",
  "Export and importing code seperates them into smaller, readable files.",
);


NOTES: 

import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames";
import names from "./names.js";

//   "./"

for export default: 

when importing and there is NO FUNCTION DO NOT use {}; only use the file name alone. 

example: import names from "./names.js";
