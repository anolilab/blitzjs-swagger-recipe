import "swagger-ui-react/swagger-ui.css";

import { GetStaticProps, Head, InferGetStaticPropsType } from "blitz";
import createSwaggerSpec from "integrations/swagger/create-swagger-spec";
import React from "react";
import SwaggerUI from "swagger-ui-react";

import packages from "../../../package.json";

const ApiDocument = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <Head>
            <title>{`${packages.name} Swagger`}</title>
            <style>
                {`
body {
    background: #fafafa !important;
}
`}
            </style>
        </Head>
        <SwaggerUI spec={spec} />
    </>
);

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps = async () => {
    const spec: Record<string, any> = createSwaggerSpec({
        title: `${packages.name} Swagger`,
        version: packages.version,
    });

    return {
        props: {
            spec,
        },
    };
};

export default ApiDocument;
