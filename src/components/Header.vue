<script setup>
import { RouterLink, RouterView } from "vue-router";
import Gallery from "./Gallery.vue";

</script>

<template>
    <div>
        <section class="overflow-x-hidden">
            <div class="grid place-content-center relative overflow-x-hidden">
                <div>
                    <video id="vid"  class="w-full aspect-auto rounded-xl" muted loop autoplay>
                        <source src="../assets/img/t11pv.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div data-aos="zoom-in" class="aos-init container mx-auto px-3 md:px-8 xl:px-24 overflow-x-hidden">
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

        <div class="mt-10  md:px-8 xl:px-24 overflow-x-hidden">
            <div class="relative flex justify-evenly  flex-wrap mt-10  md:m-10">
                <div data-aos="fade-down" class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-6 overflow-x-hidden">
                    <a href="#">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/orange_juice.jpg" alt="" />
                    </a>
                    <div class="mt-2 p-4 text-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Fresh Juice</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most delicious food....</p>
                    </div>
                </div>

                <div data-aos="fade-down" class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-6 overflow-x-hidden">
                    <a href="#">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/fest.jpg" alt="" />
                    </a>
                    <div class="mt-2 p-4 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Delicious Food</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most delicious food....</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-10  md:px-8 xl:px-24 overflow-x-hidden">
            <div class="relative flex justify-evenly flex flex-wrap mt-10  md:m-10">
                <div data-aos="fade-down" class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-6 overflow-x-hidden">
                    <a href="#">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/orange_juice.jpg" alt="" />
                    </a>
                    <div class="mt-2 p-4 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Great Dessert</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most delicious food....</p>
                    </div>
                </div>

                <div data-aos="fade-down" class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-zinc-900 dark:border-gray-700 m-6 overflow-x-hidden">
                    <a href="#">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/fest.jpg" alt="" />
                    </a>
                    <div class="mt-2 p-4 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Amazing Shisha</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most delicious food....</p>
                    </div>
                </div>
            </div>
        </div>



    
        <!-- Gallery -->
        
        <Gallery />

        <!-- clients -->

        <div data-aos="zoom-out" class="aos-init relative grid py-3 px-6 md:px-12 xl:px-24  rounded-xl shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-primary rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-zinc-900 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Best Shisha Ever</h3>
                    <p class="my-4 font-light">If you care for your shihsa, you should visit table11."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Bonnie Green</div>
                    </div>
                </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-primary rounded-tr-lg dark:bg-zinc-900 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Amazing juice</h3>
                    <p class="my-4 font-light">If you care for your shihsa, you should visit table11."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Roberta Casas</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-primary rounded-bl-lg md:border-b-0 md:border-r dark:bg-zinc-900 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Mindblowing environment</h3>
                    <p class="my-4 font-light">If you care for your shihsa, you should visit table11."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Jese Leos</div>
                    </div>
                </figcaption>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-primary rounded-b-lg md:rounded-br-lg dark:bg-zinc-900 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Efficient Staff</h3>
                    <p class="my-4 font-light">If you care for your shihsa, you should visit table11."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Joseph McFall</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<style lang="scss">

</style>
