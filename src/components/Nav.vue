<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>


<template>
<div class="sticky top-0  z-50">
     <nav
            class="relative mb-2 mx-w-full flex flex-wrap items-center justify-between  bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
            >
             
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div>
                        <RouterLink to="/">
                        <img class="w-16 m-0" src="../assets/img/table11_logo_png.png" alt="table11 logo">
                        </RouterLink>
                </div>
                <button
                class="navbar-toggler text-amber-400 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    class="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                </svg>
                </button>
                <div class="collapse navbar-collapse flex-grow items-center text-amber-400"  id="navbarSupportedContent1">
                
                <!-- Left links -->
                <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto md:ml-3">
                    <li class="nav-item p-2">
                     <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item p-2">
                     <RouterLink to="/gallery">Gallery</RouterLink>
                    </li>
                    <li class="nav-item p-2">
                     <RouterLink to="/menu">Menu</RouterLink>
                    </li>
                    <li class="nav-item p-2">
                     <RouterLink to="/booking">Booking</RouterLink>
                    </li>
                </ul>
                <!-- Left links -->
                </div>
                <!-- Collapsible wrapper -->
            </div>
            </nav>
</div>
</template>

<style scoped>

</style>
