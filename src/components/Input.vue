<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  emit("update:modelValue", value);
};
</script>

<template>
  <input
    type="text"
    class="bg-gray-custom-light w-full min-h-[3.5rem] border border-black-custom rounded-lg px-5 !outline-none !ring-0 placeholder:opacity-45"
    placeholder="enter you todo text ...!"
    :value="props.modelValue"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>
