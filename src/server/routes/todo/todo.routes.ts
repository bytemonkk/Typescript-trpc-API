import { z } from "zod";
import { router, publicProcedure } from "../../trpc.js";
import { getAllTodosOutputModel, type Todo } from "./models.js";

const TODOS: Todo[] = [
  {
    id: "1",
    isCompleted: false,
    title: "be like spiderman",
    description: "Just be a spiderman!",
  },
];
export const todoRouter = router({
  getAllTodos: publicProcedure
    .input(z.undefined())
    .output(getAllTodosOutputModel)
    .query(() => {
        return {
            todos: TODOS
        }
    }),
});
