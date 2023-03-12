<template>
    <div class="flex flex-col flex-wrap md:mx-16 mx-10 my-5 mt-10 lg:mx-20">
        <Loader />
        <h1
            class="text-white font-poppins font-thin relative tracking-widest text-3xl my-5 md:text-5xl lg:text-7xl laptoplarge:text-[4.6rem]">
            tik tak
        </h1>
    </div>


    <div class="flex items-center justify-center gap-10 my-10 mx-9 md:my-10 lg:my-20">
        <div class=" flex flex-col flex-wrap lg:ml-15 md:max-w-md lg:max-w-3xl transition-all duration-700 ">
            <h2
                class="font-poppins font-extralight uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-3xl">
                the project</h2>

            <div class="flex gap-3 my-1">
                <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                <p class="font-poppins font-extralight  text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-2">Description
                </p>
            </div>
            <p
                class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-2 md:leading-5 lg:text-base lg:mb-5">
                Tik Tak is a school project that is mainly based on <span class="text-bluelightpo font-light">user experience</span>. The main goal is to involve the user in the creation of his model and to offer him an original user experience. <br> <br> I've identified the user path, before developing the primary
                features of my website. Tik Tak is a fictitious connected watch sales site. Through Tik Tak, it is possible to compose your own<span class="text-bluelightpo font-light"> personalized pair of connected watches</span>.</p>
            <img class="transition-all p-5 duration-500 hover:scale-105 opacity-80 hover:opacity-100"
                src="../assets/tiktaklp.png" alt="image tiktak landing page">



            <div class="flex flex-wrap gap-10 my-5 mt-5  md:mb-14 mb-10 lg:mb-10   justify-center">
                <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-md transition-all hover:opacity-50 duration-500">
                </div>
                <div class="w-16 h-16 lg:w-20 lg:h-20 greendark rounded-md transition-all hover:opacity-50 duration-500">
                </div>
                <div class="w-16 h-16 lg:w-20 lg:h-20 beigebrown rounded-md transition-all hover:opacity-50 duration-500">
                </div>
                <div
                    class="w-16 h-16 lg:w-20 lg:h-20 bg-blackpo border-[1px] border-zinc-700 rounded-md transition-all hover:opacity-50 duration-500">
                </div>
            </div>

            <!--BUTTON-->

            <a href="https://tiktak-watches.melinaweb.fr/" target="_blank">
                <div
                    class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
                    <img class="w-14" src="../assets/arrow.svg" alt="icone fleche">
                    <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">link
                        to the website</p>
                </div>
            </a>







            <!--TOOLS USED-->

            <div class="flex gap-3 mt-9 mb-4">
                <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                <p class="font-poppins font-extralight text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-2">Tools Used</p>
            </div>
            <p
                class="text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5  md:leading-5 lg:text-base">
    I've used several tools and languages that allowed me to create this website.</p>

            <ul class="flex my-3 text-zinc-200 md:text-xs  lg:text-base lg:my-5 font-extralight text-xxs font-poppins space-x-4 md:space-x-16 ">
                <div>
                    <li class="flex gap-3">
                        <img class="w-3" src="../assets/triangle.svg" alt="icone triangle">
                        <p class="">HTML / CSS </p>
                    </li>

                    <li class="flex gap-3">
                        <img class="w-3" src="../assets/triangle.svg" alt="icone triangle">
                        <p>JavaScript</p>
                    </li>
                </div>

                <div>
                    <li class="flex gap-3">
                        <img class="w-3" src="../assets/triangle.svg" alt="icone triangle">
                        <p>Vue.js</p>
                    </li>
                    <li class="flex gap-3">
                        <img class="w-3" src="../assets/triangle.svg" alt="icone triangle">
                        <p>Tailwind</p>
                    </li>
                </div>

                <div>
                    <li class="flex gap-3">
                        <img class="w-3" src="../assets/triangle.svg" alt="icone triangle">
                        <p>Figma</p>
                    </li>
                    <li class="flex gap-3">
                        <img class="w-3" src="../assets/triangle.svg" alt="icone triangle">
                        <p>TypeScript</p>
                    </li>
                </div>
            </ul>
        
        </div>
    </div>
    <FooterR />
</template>

<script setup>

import Loader from '@/components/Loader.vue'
import FooterR from '@/components/FooterR.vue';

</script>