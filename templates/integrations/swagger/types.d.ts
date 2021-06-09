import swaggerJSDoc from "swagger-jsdoc";

export type SwaggerOptions = {
    openApiVersion?: string;
    apiFolders?: string[];
    title: string;
    version: string;
    options?: swaggerJSDoc.Options
};
