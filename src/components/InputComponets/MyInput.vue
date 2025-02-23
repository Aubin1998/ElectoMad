<template>
    <div class="w-[300px] mt-2">
      <h3 class="label">{{ label }}</h3>
      <input
        type="text"
        :placeholder="placeholder"
        class="input"
        :value="modelValue"
        @input="updateValue"
        :disabled="disabled"
      />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: 'Label'
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
  };
  </script>
  
  <style scoped>
  .input {
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fafbfd;
  }
  
  .input:focus {
    border-color: #1b65b4;
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
    outline: none;
    color: rgb(219, 213, 213);
  }
  </style>
  