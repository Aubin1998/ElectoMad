<template>
  <input
    type="text"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 custom-padding"
    :placeholder="placeholder"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  id: {
    type: String,
    default: 'voice-search'
  },
  placeholder: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);
</script>


<style scoped>
/* Add your styles here */
.custom-padding {
  padding: 5px 10px;
  margin: 5px;
  width: 90%;
  margin: 5px auto;
}
</style>
