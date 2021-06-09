/* eslint-disable no-console */
/* eslint-disable unicorn/no-process-exit */
if (process.env.SKIP_CHECK !== undefined) {
    process.exit(0);
}

let requiredVersion = require("fs").readFileSync(".nvmrc", { encoding: "utf8" }).trim();

if (requiredVersion === "") {
    console.info("No .nvmrc found, skipped check.");

    process.exit(1);
}

if (!requiredVersion.includes("v")) {
    requiredVersion = `v${requiredVersion}`;
}

if (process.version.split(".")[0] !== requiredVersion.split(".")[0]) {
    console.error(`[!] This project requires Node.js ${requiredVersion}, current version is ${process.version}`);

    process.exit(1);
}
