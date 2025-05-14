import { createContext, useContext, } from "react";

export const TodoContext = createContext({
    
    todos: [{
        id: 1,
        todo: "Todo msg",
        completed: false,
    }],
    addTodo: (todo) => {},
    deleteTodo: (todo, id) => {},
    updateTodo: (id) => {},
    toggleComplete: (id) => {}
   
})
export const UseTodo = () => {
    return (
        useContext(TodoContext)
    )
} 
export const TodoProvider = TodoContext.Provider