<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
        <div class="wrapper">
           <Nav></Nav>
        </div>
    <RouterView />
</template>

<style scoped>
</style>
