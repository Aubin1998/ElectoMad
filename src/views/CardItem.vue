<template>
    <div class="w-48 h-52 bg-gradient-to-br hover:from-blue-400/30 to-blue-200/60 rounded-xl
    cursor-pointer flex flex-col items-center justify-center text-gray-700
    transition-all duration-300 ease-in-out relative overflow-hidden
    hover:scale-105" @click="handleClick">
        <div class="w-40 h-44 py-2 bg-blue-300/30 rounded-full flex flex-col justify-center items-center
        hover:bg-blue-400/40 transition-colors duration-300 border border-blue-400/30 m-2">
            <h1 class="text-[15px] font-medium text-blue-800 text-center leading-tight px-2">
                {{ title }}
            </h1>
        </div>
        <div class="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-1 rounded-md 
        transition-colors duration-300 my-1">
            Voir
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['click']);

function handleClick() {
    emit('click', props.title);
}
</script>

<style scoped>
/* Add any additional styling specific to the card component here */
</style>