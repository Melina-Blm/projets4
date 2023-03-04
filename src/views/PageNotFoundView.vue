<template>
    
   <div class="grid grid-cols-1 md:grid-cols-2 m-12 md:m-7 lg:m-14 laptoplarge:mx-16">
          <div class=" flex flex-col flex-wrap md:mx-11">
            <Loader/>
            <h1 class="text-white font-gloock tracking-widest text-4xl my-2 mt-5 md:text-5xl lg:text-7xl laptoplarge:text-[5rem]">page not found...</h1>

            <p class="text-white font-poppins text-xs font-extralight tracking-wide lg:text-base laptoplarge:text-base laptoplarge:my-5 ">Oops! It seems that the page you were looking for does not exist or has been deleted. We're sorry for the inconvenience.<br>If you need further assistance or have any questions, please do not hesitate to contact me. I'll be happy to assist you in your search.</p>
              <div class="my-5 flex gap-4 lg:gap-6 laptoplarge:gap-8 items-center hover:cursor-pointer lg:my-6">
                <span class="w-11 bg-white h-[0.3px] md:w-16 lg:w-28 laptoplarge:w-32 laptopmax:w-48"></span>
                <a href="https://www.linkedin.com/in/melina-bouchelleghem/" target="_blank">
                  <img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/linkedin.svg" alt="">
                </a>
                <a href="https://instagram.com/meli.codes?igshid=YmMyMTA2M2Y=" target="_blank">
                  <img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/instagram.svg" alt="">
                </a>
                  <img  class="w-7 lg:w-9 transition-all hover:scale-125 duration-300" src="../assets/twitter.svg" alt="">
                <a href="https://github.com/Melina-Blm" target="_blank">
                   <img  class="w-7 lg:w-9 transition-all hover:scale-125 duration-300 ease-in-out" src="../assets/github.svg" alt="">
                </a>
              </div>
          </div>
          <div class="m-auto">
          <img class="md:w-[250px] lg:w-[310px] hidden md:block laptoplarge:w-[350px] laptopmax:w-[370px]" src="../assets/illustrationcircle.svg" alt="">
          </div>
        </div>

</template>

<script setup>

import Loader from '@/components/Loader.vue'

</script>