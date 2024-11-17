<script setup lang="ts">
import { useStore } from "../stores/todos";

const { todos } = useStore();
</script>

<template>
  <div class="w-full h-auto flex justify-between items-center">
    <div class="w-auto gap-2 flex justify-center items-center">
      <span class="text-blue-light">All Todos :</span>
      <span class="px-2 rounded-full bg-gray-custom-light">{{
        todos.length
      }}</span>
    </div>

    <div class="w-auto gap-2 flex justify-center items-center">
      <span class="text-blue-light">Complated :</span>
      <div class="w-auto h-auto">
        <span
          class="px-2 rounded-full bg-gray-custom-light"
          v-if="todos.filter((t) => t.complated).length === 0"
          >0</span
        >
        <div
          class="flex justify-center items-center gap-1 px-2 rounded-full bg-gray-custom-light"
          v-else
        >
          <span>{{ todos.filter((t) => t.complated).length }}</span>
          <span class="text-xs">from</span>
          <span>{{ todos.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
