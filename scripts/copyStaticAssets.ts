import * as shell from "shelljs";

// copy static assets to build folder if needed
shell.cp("-R", "src/assets", "build/assets");
