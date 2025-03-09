<template>
  <div :style="{ width }" class="mt-2">
    <h3 class="label">{{ label }}</h3>
    <Datepicker :disabled="disabled" v-model="dateValue" :placeholder="placeholder"
      style="padding: 5px 10px; width: 100%; border-radius: 5px; border: 1px solid #aaaac5; background-color: #3c4c6d09; color: #fafbfd;"
      class="px-2.5 py-1 w-full rounded-md border border-gray-400 bg-gray-50 text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none focus:text-gray-300"
      :format="format" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Datepicker from 'vue3-datepicker'; // Assurez-vous d'importer le composant Datepicker

const props = defineProps({
  label: {
    type: String,
    default: 'Date de naissance'
  },
  placeholder: {
    type: String,
    default: 'Insérez une date de naissance'
  },
  modelValue: {
    type: [String, Date],
    default: ''
  },
  format: {
    type: String,
    default: 'dd-MM-yyyy'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '300px' // Valeur par défaut de 300px
  }
});

const emit = defineEmits(['update:modelValue']);

const dateValue = ref(props.modelValue);

watch(dateValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
