import {z} from "zod";

export const todoModel = z.object({
    id: z.string().describe("UUID of the todo"),
    title: z.string().describe("Title of the todo"),
    description: z.string().optional().nullable().describe("description for the todo"),
    isCompleted: z.boolean().optional().default(false).describe("if the todo is completed or not")

})

// It exists only during development/type-checking. 
// It does not exist in the JavaScript runtime.
export type Todo = z.infer<typeof todoModel>;


// This creates an actual JavaScript value/object at runtime.
export const getAllTodosOutputModel = z.object({
    todos: z.array(todoModel)
})