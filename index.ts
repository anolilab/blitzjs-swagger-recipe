import { RecipeBuilder } from "@blitzjs/installer";
import path from "path"

import pkg from "./package.json";

export default RecipeBuilder()
    .setName("Tailwind UI")
    .setOwner(pkg.author)
    .setRepoLink(pkg.repository.url)
    .addAddDependenciesStep({
        stepId: "addDeps",
        stepName: "Add npm dependencies",
        explanation: `Swagger requires a couple of dependencies to get up and running.`,
        packages: [
            { name: "swagger-jsdoc", version: "latest" },
            { name: "swagger-ui-react", version: "latest" },
            { name: "@types/swagger-jsdoc", version: "latest", isDevDep: true },
            { name: "@types/swagger-ui-react", version: "latest", isDevDep: true },
        ],
    })
    .addNewFilesStep({
        stepId: "addIntegrations",
        stepName: "Add Swagger helper files",
        explanation: `Helper to create spec based on swagger-jsdoc`,
        targetDirectory: ".",
        templatePath: path.join(__dirname, "templates", "integrations"),
        templateValues: {},
    })
    .addNewFilesStep({
        stepId: "addSwaggerPage",
        stepName: "Add Swagger page file",
        explanation: `Helper to create spec based on swagger-jsdoc`,
        targetDirectory: ".",
        templatePath: path.join(__dirname, "templates", "pages"),
        templateValues: {},
    })
    .build();
