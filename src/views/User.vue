<template>
     <NavBar />
    <router-view />
</template>

<script setup>

import NavBar from "../components/NavBar.vue";
import { useShow } from "@/stores/show";
const show = useShow()

</script>

<style scoped></style>