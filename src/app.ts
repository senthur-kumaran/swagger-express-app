import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Swagger setup
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, (req: Request, res: Response, next: NextFunction) =>
    swaggerUi.setup(specs)(req, res, next),
);

app.use('/api-doc', swaggerUi.serve, (req: Request, res: Response, next: NextFunction) =>
    swaggerUi.setup(specs)(req, res, next),
);

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
