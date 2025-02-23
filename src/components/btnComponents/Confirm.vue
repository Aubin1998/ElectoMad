<template>
  <button type="button"
    class="text-white bg-blue-700  hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10  py-2.5 me-2 mb-2 focus:outline-none "
    @click="toggle">
    <h3>{{ buttonText }}</h3>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Annuler'
  }
});

const emit = defineEmits(['toggle']);

const toggle = () => {
  emit('toggle');
};
</script>

<style scoped>
/* Ajoutez ici des styles spécifiques au composant si nécessaire */
</style>