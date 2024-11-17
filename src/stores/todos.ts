import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

export interface todosProps {
  id: number;
  text: string;
  complated: boolean;
}

export const useStore = defineStore("todos", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      todos: [] as todosProps[],
    };
  },
  actions: {
    addTodos(todo: todosProps) {
      const toast = useToast();
      this.todos.push(todo);
      toast.success("add todo successfully!");
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
        toast.success("Todo removed successfully!");
      } else {
        toast.error("Todo not found!");
      }
    },
  },
});
