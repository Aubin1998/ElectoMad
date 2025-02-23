<template>
    <div class="w-[300px] mt-2">
      <h3 class="label">{{ label }}</h3>
      <Datepicker  :disabled="disabled"
        v-model="dateValue"
        :placeholder="placeholder"
         style="padding: 5px 10px;width: 100%;border-radius: 5px;border: 1px solid #aaaac5;background-color: #3c4c6d09;color: #fafbfd;"
        class="px-2.5 py-1 w-full rounded-md border border-gray-400 bg-gray-50 text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none focus:text-gray-300"
        :format="format"
      />
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
      default: false,
      required: false
    }
   
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const dateValue = ref(props.modelValue);
  
  watch(dateValue, (newValue) => {
    emit('update:modelValue', newValue);
  });
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
    /* Couleur de bordure bleue quand l'input est actif */
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
    /* Ombre bleue plus marquée */
    outline: none;
    /* Enlever le contour par défaut */
    color: rgb(219, 213, 213);
    /* Couleur du texte quand l'input est actif */
}

  </style>
  