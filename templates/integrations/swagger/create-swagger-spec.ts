import path from "path";
import swaggerJsdoc, { Options } from "swagger-jsdoc";

import { SwaggerOptions } from "./types";

const API_FOLDERS = ["app/pages/api", "app/pages/**/api", "app/pages/**/api/**", "app/**/api/**"];

export default function createSwaggerSpec({ apiFolders = API_FOLDERS, options: swaggerOptions }: SwaggerOptions) {
    const folders: string[] = []; // files containing annotations as above

    apiFolders.forEach((folder) => {
        const apiDirectory = path.join(process.cwd(), folder);

        folders.push(`${apiDirectory}/*.js`, `${apiDirectory}/*.ts`);
    });

    const options = {
        ...swaggerOptions,
        definition: {
            openapi: "3.0.0",
            ...swaggerOptions?.definition,
        },
        swaggerDefinition: {
            openapi: "3.0.0",
            components: {},
            ...swaggerOptions?.swaggerDefinition,
        },
        apis: folders,
    } as Options;

    return swaggerJsdoc(options);
}
