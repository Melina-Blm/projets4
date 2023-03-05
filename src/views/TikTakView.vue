<template>

    <div class="flex flex-col flex-wrap md:mx-16 mx-10 my-5 mt-10 lg:mx-20">
        <Loader />
        <h1 class="text-white font-gloock relative tracking-widest text-3xl my-5 md:text-5xl lg:text-7xl laptoplarge:text-[4.6rem]">tik tak<span class="w-24 absolute bottom-4 lg:bottom-7 mx-5 bg-white h-[0.3px] md:w-16 lg:w-28 laptoplarge:w-32 laptopmax:w-48"></span>
        </h1>
    </div>

   
        <div class="flex items-center justify-center gap-10 my-10 mx-9 md:my-10 lg:my-20">
            <div class=" flex flex-col flex-wrap lg:ml-15 md:max-w-md lg:max-w-3xl transition-all duration-700 ">
                <h2 class="font-poppins font-light uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-2xl">about the project</h2>

                <div class="flex gap-3 my-1">
                    <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                    <p class="font-poppins font-extralight  text-white text-sm md:text-base lg:text-lg lg:mb-2">Description</p>
                </div>
                <p class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-2 md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                <img class="transition-all p-5 duration-500 hover:scale-105 opacity-80 hover:opacity-100"
                    src="../assets/tiktaklp.png" alt="image tiktak landing page">
                <p class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-2 md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                <p class="  text-zinc-200 font-poppins md:text-xs text-xs font-extralight tracking-wide leading-5 md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>

<!--BUTTON-->

                <a href="https://tiktak-watches.melinaweb.fr/" target="_blank">
                    <div class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
                    <img class="w-14" src="../assets/arrow.svg" alt="icone fleche">
                    <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">link to the website.</p>
                    </div>
                </a>

<!--COLOR PALETTE-->

                <div class="flex gap-3 mt-14 mb-4">
                    <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                    <p class="font-poppins font-extralight  text-white text-sm md:text-base lg:text-lg lg:mb-2">Color Palette</p>
                </div>

                <p class="text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5  md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>

                <div class="flex flex-wrap gap-10 my-5 justify-center">
                    <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-md relative transition-all hover:opacity-50 duration-500"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 greendark rounded-md"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 beigebrown rounded-md"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 bg-blackpo  rounded-md"></div>
                </div>

<!--TOOLS USED-->

                <div class="flex gap-3 mt-14 mb-4">
                    <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                    <p class="font-poppins font-extralight text-white text-sm md:text-base lg:text-lg lg:mb-2">Tools Used</p>
                </div>
                <p class="text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5  md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>

                <div class="flex flex-wrap gap-10 mt-5 justify-center">
                    <img class="w-20 bg-blackpo rounded-2xl p-3" src="../assets/vue.png" alt="icone vuejs">
                    <img class="w-20 bg-blackpo rounded-2xl p-3" src="../assets/html_5.png" alt="icone html">
                    <img class="w-20 bg-blackpo rounded-2xl p-3" src="../assets/css_3.png" alt="icone css">
                </div>
            </div>
    </div>

</template>

<script setup>

import Loader from '@/components/Loader.vue'

</script>