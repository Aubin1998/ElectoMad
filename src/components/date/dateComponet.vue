<template>
  <div>
    <div class="itemInput">
      <label for="dateInstallation">Date d'installation</label>
      <Datepicker id="dateInstallation" placeholder="Sélectionner une date" format="yyyy-MM-dd" />
    </div>
  </div>
</template>

<script setup>
import Datepicker from "vue3-datepicker";
</script>

<style scoped></style>