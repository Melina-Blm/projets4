<template>
    <div class="flex flex-col flex-wrap md:mx-16 mx-10 my-5 mt-10 lg:mx-20 ">
        <Loader />
        <h1
            class="text-white font-poppins font-thin relative tracking-widest text-4xl my-5 md:text-5xl lg:text-7xl laptoplarge:text-[4.6rem]">
            strella</h1>
    </div>


    <div class="flex items-center justify-center gap-10 my-10 mx-9 md:my-10 lg:my-20">
        <div class=" flex flex-col flex-wrap lg:ml-15 md:max-w-md lg:max-w-3xl transition-all duration-700 ">
            <h2
                class="font-poppins font-extralight uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-3xl">
                the project</h2>
            <div class="flex gap-3 my-1">
                <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                <p class="font-poppins font-extralight  text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-2">Description</p>
            </div>
            <p
                class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-2 md:leading-5 lg:text-base">
                During my 2nd semester, I had the opportunity to design a mock-up for a fictional festival. I've established a communication strategy, design visuals and wireframes in order to promote the festival.<br> <br>To achieve the mock-up, I had to define some elements like the target of my festival, the place, the visual identity as well as the musical orientations of the festival. All these elements allowed me to get a main idea for the creation of my mock-up.</p>
            <img class="transition-all border-[1px] my-5 rounded-xl border-zinc-400 duration-500 hover:scale-105 opacity-90 hover:opacity-100"
                src="../assets/strella.jpg" alt="image strella">
 
                
            <div class="flex flex-wrap gap-10  mt-5 md:mb-14 mb-10 lg:mb-10 justify-center">
            <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-md transition-all hover:opacity-50 duration-500">
            </div>
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-md purplee transition-all hover:opacity-50 duration-500">
            </div>
            <div class="w-16 h-16 lg:w-20 lg:h-20 beigestrella rounded-md transition-all hover:opacity-50 duration-500">
            </div>
            <div
                class="w-16 h-16 lg:w-20 lg:h-20 strelladark  border-[1px] border-zinc-700 rounded-md transition-all hover:opacity-50 duration-500">
            </div>
        </div>


            <!--BUTTON-->

            <a href="https://www.figma.com/file/phLvccLqjHjnjUDBoVnnxJ/portfolio-project-strella?node-id=1%3A1171&t=fbLD4FfJbEeUel6v-1"
                target="_blank">
                <div
                    class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
                    <img class="w-14" src="../assets/arrow.svg" alt="icone fleche">
                    <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">link
                        to the figma</p>
                </div>
            </a>

            <!--COLOR PALETTE-->

 

        <!--TOOLS USED-->



    </div>
</div>

<FooterR /></template>

<script setup>

import Loader from '@/components/Loader.vue'
import FooterR from '@/components/FooterR.vue';

</script>