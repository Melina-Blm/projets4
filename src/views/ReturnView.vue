<template>
    <div class="grid grid-cols-1 md:grid-cols-2 m-12 md:m-7 lg:m-14 laptoplarge:mx-16">
        <div class=" flex flex-col justify-center flex-wrap md:mx-11 my-16">
            <Loader />
            <h1
                class="text-white font-gloock tracking-widest text-4xl my-2 mt-5 md:text-4xl lg:text-7xl laptoplarge:text-[5rem]">
                thank you !</h1>

            <p
                class="text-white font-poppins text-xs font-extralight tracking-wide lg:text-base laptoplarge:text-base laptoplarge:my-5 ">Thank you very much for your message. I will be sure to read it as soon as possible !</p>
                
                <RouterLink to="/">
                   <div class="flex gap-2 my-5 border-[1px] p-3 lg:my-2 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
            <img class="w-14" src="../assets/arrow.svg" alt="">
            <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">home.</p>
            </div>
            </RouterLink>
            <div class="my-5 flex gap-4 lg:gap-6 laptoplarge:gap-8 items-center hover:cursor-pointer lg:my-6">
                <span class="w-11 bg-white h-[0.3px] md:w-16 lg:w-28 laptoplarge:w-32 laptopmax:w-48"></span>
                <a href="https://www.linkedin.com/in/melina-bouchelleghem/" target="_blank">
                    <img class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/linkedin.svg" alt="">
                </a>
                <a href="https://instagram.com/meli.codes?igshid=YmMyMTA2M2Y=" target="_blank">
                    <img class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/instagram.svg"
                        alt="">
                </a>
                <img class="w-7 lg:w-9 transition-all hover:scale-125 duration-300" src="../assets/twitter.svg" alt="">
                <a href="https://github.com/Melina-Blm" target="_blank">
                    <img class="w-7 lg:w-9 transition-all hover:scale-125 duration-300 ease-in-out"
                        src="../assets/github.svg" alt="">
                </a>
            </div>
        </div>
        
    </div>
</template>

<script setup>

import Loader from '@/components/Loader.vue'
import { RouterLink } from 'vue-router';

</script>