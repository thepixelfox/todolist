import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import getCookie from "../handlers/getCookie";
import setCookie from "../handlers/setCookie";

export interface todosProps {
  id: number;
  text: string;
  complated: boolean;
}

const handleGetTodos = () => {
  const cookieTodos = getCookie("todos");
  if (cookieTodos) {
    return JSON.parse(cookieTodos) as todosProps[];
  } else {
    setCookie("todos", JSON.stringify([]), 30);
    return [] as todosProps[];
  }
};

export const useStore = defineStore("todos", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      todos: handleGetTodos(),
    };
  },
  actions: {
    addTodos(todo: todosProps) {
      const toast = useToast();
      this.todos.push(todo);
      setCookie("todos", JSON.stringify(this.todos), 30);
      toast.success("Add Todo Successfully!");
    },
    removeTodo(id: number | undefined) {
      const toast = useToast();

      if (id === undefined) {
        toast.error("ID is undefined!");
        return;
      }

      const index = this.todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
        setCookie("todos", JSON.stringify(this.todos), 30);
        toast.success("Todo Removed Successfully!");
      } else {
        toast.error("Todo Not Found!");
      }
    },
  },
});
