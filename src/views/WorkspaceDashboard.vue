<template>
    <div class="container1">
        <WorkspaceSideBar />
        <div class="cont">


            <WorkspaceNavigation />
            <div class="p-4 w-full">
                <WorkspaceContainte />
            </div>
        </div>
    </div>



</template>

<script setup>
import WorkspaceNavigation from "@/components/WorkspaceNavigation.vue";
import WorkspaceSideBar from "@/components/WorkspaceSideBar.vue";
import WorkspaceContainte from "@/components/WorkspaceContainte.vue";



</script>

<style scoped>




















































html, body {
    overflow: hidden;
    height: 100%;
    margin: 0;
}

.container1 {
    height: 100vh;
    display: flex;
    overflow: hidden; /* Ajouté pour empêcher le défilement */
}

.cont {
    width: 80%;
    background-color: #060827;
}

.containte {
    
}

</style>