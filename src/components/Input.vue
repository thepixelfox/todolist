<script setup lang="ts">
import trim from "../handlers/trim";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: String,
  errorMessage: String,
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = trim(target.value);

  emit("update:modelValue", value);
};
</script>

<template>
  <div class="relative w-full h-auto">
    <input
      type="text"
      class="bg-gray-custom-light w-full min-h-[3.5rem] border border-black-custom px-5 !outline-none !ring-0 placeholder:opacity-45"
      :class="Boolean(props.errorMessage) ? `rounded-b-lg` : `rounded-lg`"
      placeholder="enter you todo text ...!"
      :value="props.modelValue"
      @input="handleInput"
      v-bind="$attrs"
    />
    <p
      class="bg-rose-600 w-full rounded-t-lg absolute min-h-7 flex border border-black-custom justify-center items-center py-0.5 px-1 -top-7"
      v-if="Boolean(props.errorMessage)"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
