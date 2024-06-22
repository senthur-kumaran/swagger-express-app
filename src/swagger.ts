export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'A simple Express API documented with Swagger'
        },
        // servers: [
        //     {
        //         url: 'http://localhost:3000',
        //     },
        // ],
    },
    apis: ['./src/routes/*.ts'], // files containing annotations for the Swagger doc
};
