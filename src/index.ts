import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './server/index.js';
import { createContext } from "./server/context.js";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req,res) => {
    return res.json({status: "Server is up and running!"});

})

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

const PORT = 8000;

app.listen(PORT, () => console.log(`Express server is running on PORT ${PORT}`));
