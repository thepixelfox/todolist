<script setup lang="ts">
import Input from "./Input.vue";
import Button from "./Button.vue";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { todosProps, useStore } from "../stores/todos";
import { watch } from "vue";
import { useToast } from "vue-toastification";
import trim from "../handlers/trim";

const { todos, addTodos } = useStore();
const toast = useToast();

const { handleSubmit, errors, defineField, resetForm } = useForm({
  validationSchema: yup.object({
    text: yup.string().required("Todo Title is Required!"),
  }),
});

const [text, textAttr] = defineField("text");

const handleAddTodo = handleSubmit((values) => {
  const todosData: todosProps = {
    id: todos.length + 1,
    text: trim(values.text),
    complated: false,
  };

  addTodos(todosData);

  resetForm();
});

watch(errors, () => {
  if (errors.value.text) {
    const errorMessage = errors.value.text;
    toast.error(errorMessage);
  }
});
</script>

<template>
  <div
    class="w-full h-full max-md:min-h-[10rem] min-h-[15rem] bg-black-custom flex flex-col"
  >
    <div
      class="max-w-custom-container relative w-full h-full mx-auto flex-grow flex justify-center items-center px-4"
    >
      <img src="/images/logo.png" alt="logo" width="150" class="!select-none" />
      <form
        class="absolute w-full -bottom-[1.75rem] max-sm:-bottom-[5.75rem] flex justify-center items-center gap-2 px-4 max-sm:flex-col"
        @submit="handleAddTodo"
      >
        <Input v-model="text" v-bind="textAttr" />
        <Button type="submit" />
      </form>
    </div>
  </div>
</template>
