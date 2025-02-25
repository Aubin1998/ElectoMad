<template>
    <div :class="['mt-2', widthClass]">
      <h3 class="label">{{ label }}</h3>
      <select :disabled="disabled" class="annee" v-model="selectedValue" @change="updateValue">
        <option v-for="option in options" :key="option.value" :value="option.value" v-if="options[0].text">
          {{ option.text }}
        </option>
        <option v-for="annee in options" :key="annee.id" :value="annee.id" v-else>
          {{ annee.annee }} {{ annee.descriptionAnnee }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: 'Label',
    },
    defaultOption: {
      type: String,
      default: 'Sélectionnez une option',
    },
    options: {
      type: Array,
      default: () => [
        { text: 'Oui', value: 'oui' },
        { text: 'Non', value: 'non' },
      ],
    },
    modelValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '300px',
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const selectedValue = ref(props.modelValue);
  
  watch(selectedValue, (newValue) => {
    emit('update:modelValue', newValue);
  });
  
  const updateValue = () => {
    emit('update:modelValue', selectedValue.value);
  };
  
  const widthClass = computed(() => `w-[${props.width}]`);
  </script>
  
  <style scoped>
  .annee {
    width: 100%;
    padding: 5px;
    background-color: #3c4c6d09;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    color: #fafbfd;
  }
  
  option {
    background-color: rgba(67, 67, 79, 0.83);
    color: #f0f3f6;
  }
  </style>
  