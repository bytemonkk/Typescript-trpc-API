import { router } from "./trpc.js";
import {todoRouter} from "./routes/todo/todo.routes.js";


// Root router
export const appRouter = router({
    // ..
    todos: todoRouter
});

export type appRouter = typeof appRouter;
