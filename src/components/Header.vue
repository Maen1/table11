<script setup>
    import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div>
        <section class="md:-mt-5">
            <div data-aos="fade-up" class="aos-init relative overflow-hidden bg-no-repeat bg-cover">
                 <img class=" h-[600px] w-full" src="../assets/img/shisha4.jpg" alt="shisha">
            </div>

            <div data-aos="zoom-in" class="aos-init container mx-auto px-6 md:px-12 xl:px-32">
            <div class="text-center text-secondary">
                <div class="block rounded-xl shadow-lg px-6 py-12 md:py-16 md:px-12 bg-slate-800" style="margin-top: -210px; backdrop-filter: blur(30px);">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The Best Shisha in Town<br /><span class="text-accent text-3xl md:text-4xl xl:text-5xl">Welcome to Table11</span></h1>
                <p class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-primary text-pblue  text-sm font-medium  leading-snug uppercase rounded shadow-md hover:bg-secondary  hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out">
                     <RouterLink to="/booking">Reserve your table</RouterLink>
                </p>
                </div>
            </div>
            </div>
    </section>

        <div class="mt-10">
            <div class="relative flex justify-center flex flex-wrap mt-10  md:m-10">
                <div data-aos="fade-right" class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-slate-800 dark:border-gray-700 m-6 ">
                    <a href="#">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/orange_juice.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Fresh Juice</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest juice ever ....</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-pblue bg-accent rounded-xl hover:bg-primary focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-accent dark:hover:bg-primary dark:focus:ring-amber-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                
                <div data-aos="fade-up" class="aos-init max-w-sm md:max-w-lg bg-white  rounded-xl shadow dark:bg-slate-800 dark:border-gray-700 m-6">
                    <a href="#">
                        <img class="rounded-xl hover:-translate-y-1 hover:scale-105 duration-300" src="../assets/img/fest.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-accent">Delicious Food</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the most delicious food....</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-pblue bg-accent rounded-xl hover:bg-primary focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-accent dark:hover:bg-primary dark:focus:ring-amber-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       

    
    <section class="relative bg-slate-800 mt-4">
        <div class="md:flex flex-warp max-w-screen-xl px-4 py-8">
            <div class="place-self-center text-center w-full md:w-1/2">
                <h1 class="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl dark:text-secondary">
                    Best Shisha ever 
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">...</p>
    
                 <p class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-primary text-pblue  text-sm font-medium  leading-snug uppercase rounded shadow-md hover:bg-secondary  hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out">
                     <RouterLink to="/booking">Reserve your table</RouterLink>
                </p>
            </div>
            <div class="reltaive place-self-center text-center  w-full md:w-1/2">
                <img class="float-right" src="../assets/img/shisha_web.png" alt="shishas">
            </div>                
        </div>
    </section>

     <div
            data-aos="zoom-in"
            id="carouselExampleCrossfade"
            class="aos-init carousel slide carousel-fade relative my-5"
            data-bs-ride="carousel"
            data-carousel="dynamic"
            >
                <div class="aos-init carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active float-left w-full">
                        <img
                        src="../assets/img/shisha4.jpg"
                        class="md:rounded-xl block object-contain mx-auto  max-h-[45rem] backdrop-blur-lg shadow-amber-100"
                        alt="shisha"
                        />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <img
                        src="../assets/img/shisha_gaze.jpg"
                        class="md:rounded-xl block object-contain mx-auto  max-h-[45rem]"
                        alt="Camera"
                        />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <img
                        src="../assets/img/shisha_cake_smile.jpg"
                        class="md:rounded-xl block object-contain mx-auto  max-h-[45rem]"
                        alt="Exotic Fruits"
                        />
                    </div>
                </div>
        </div>


    <!-- clients -->
<!--             
    <div class="relative grid   rounded-xl shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-primary rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-slate-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Very easy this was to integrate</h3>
                    <p class="my-4 font-light">If you care for your time, I hands down would go with this."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Bonnie Green</div>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-primary rounded-tr-lg dark:bg-slate-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Solid foundation for any project</h3>
                    <p class="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Roberta Casas</div>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-primary rounded-bl-lg md:border-b-0 md:border-r dark:bg-slate-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Mindblowing workflow</h3>
                    <p class="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Jese Leos</div>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-primary rounded-b-lg md:rounded-br-lg dark:bg-slate-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-slate-800 dark:text-accent">Efficient Collaborating</h3>
                    <p class="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-accent text-left">
                        <div>Joseph McFall</div>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                    </div>
                </figcaption>    
            </figure>
        </div> -->


    <!-- end clients -->

</div>
</template>

<style lang="scss">

</style>
