import merge from "lodash.merge";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";

import { SwaggerOptions } from "./types";

const API_FOLDERS = [
    "pages/api",
    "pages/**/api",
    "pages/**/api/**",
];

export default function createSwaggerSpec({
    openApiVersion = "3.0.0", apiFolders = API_FOLDERS, title, version, options: swaggerOptions = {},
}: SwaggerOptions) {
    const folders: string[] = []; // files containing annotations as above

    apiFolders?.forEach((folder) => {
        const apiDirectory = path.join(process.cwd(), folder);

        folders.push(`${apiDirectory}/*.js`, `${apiDirectory}/*.ts`);
    });

    const options = merge({
        definition: {
            openapi: openApiVersion,
            info: {
                title,
                version,
            },
        },
        apis: folders,
    }, swaggerOptions);

    return swaggerJsdoc(options);
}
