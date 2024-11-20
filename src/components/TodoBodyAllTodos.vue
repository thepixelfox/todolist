<script setup lang="ts">
import { useStore } from "../stores/todos";
import EmptyBoxTodos from "./EmptyBoxTodos.vue";
import TodoBox from "./TodoBox.vue";

const { todos, removeTodo, editTodoChecked } = useStore();

const handleRemoveTodo = (id: number | undefined) => {
  removeTodo(id);
};
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-3">
    <EmptyBoxTodos v-if="todos.length === 0" />
    <TodoBox
      v-else
      v-for="todo in todos"
      :key="todo.id"
      :text="todo.text"
      :id="todo.id"
      v-model:model-value="todo.complated"
      @update:model-value="(value) => editTodoChecked(todo.id, value)"
      @set-id="(id) => handleRemoveTodo(id)"
    />
  </div>
</template>
