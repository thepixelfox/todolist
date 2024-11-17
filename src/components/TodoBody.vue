<script setup lang="ts">
import TodoBodyAllTodos from "./TodoBodyAllTodos.vue";
import TodoBodyHeader from "./TodoBodyHeader.vue";
</script>

<template>
  <div class="w-full max-w-custom-container mx-auto h-full mt-28 sm:mt-16 px-4">
    <div class="w-full h-full flex flex-col justify-center items-center gap-6">
      <TodoBodyHeader />
      <TodoBodyAllTodos />
    </div>
  </div>
</template>
