<script setup>
import { RouterLink, RouterView } from "vue-router";
import Gallery from "./Gallery.vue";
import Clients from "./Clients.vue";
</script>

<template>
    <div>
        <section class="overflow-x-hidden">
            <div class="grid place-content-center relative overflow-x-hidden">
                <div>
                    <video id="vid"  class="w-full aspect-auto  rounded-xl" muted loop autoplay>
                        <source src="../assets/img/t11pv.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="aos-init container mx-auto px-3 md:px-8 xl:px-24 overflow-x-hidden">
                <div class="text-center text-secondary">
                    <div class="block rounded-xl shadow-lg px-4 py-8  bg-zinc-900 mt-2">
                        <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"><span class="text-accent text-3xl md:text-4xl xl:text-5xl">Welcome to Table11</span></h1>
                        <p class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-primary text-pblue  text-sm font-medium  leading-snug uppercase rounded shadow-md hover:bg-secondary  hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out">
                            <RouterLink to="/booking">Reserve your table</RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="md:mb-8">
            <div class="md:px-8 xl:px-24 overflow-x-hidden">
            <div class="relative flex justify-evenly  flex-wrap mt-10  md:m-10">
                <div class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-4 overflow-x-hidden">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/orange_juice.jpg" alt="" />
                    <div class="mt-2 p-4 text-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Fresh Juice</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Fresh juice to enjoy your shisha....</p>
                    </div>
                </div>

                <div class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-4 overflow-x-hidden">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/fest.webp" alt="" />
                    <div class="mt-2 p-4 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Delicious Food</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most delicious food....</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:px-8 xl:px-24 overflow-x-hidden">
            <div class="relative flex justify-evenly  flex-wrap   md:mx-10">
                <div class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-4 overflow-x-hidden">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/cake.webp" alt="" />
                    <div class="mt-2 p-4 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Great Dessert</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Desserts made just for you....</p>
                    </div>
                </div>

                <div class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-4 overflow-x-hidden">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/selfi.webp" alt="" />
                    <div class="mt-2 p-4 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Amazing Shisha</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Shisha with various falvours....</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <!-- Gallery -->
        
        <Gallery />
        <!-- clients -->
        <!-- <clients /> -->
    </div>
</template>

<style lang="scss">

</style>
