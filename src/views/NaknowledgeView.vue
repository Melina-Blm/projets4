<template>

    <div class="flex flex-col flex-wrap md:mx-16 mx-10 my-5 mt-10 lg:mx-20">
        <Loader/>
        <h1 class="text-white font-poppins font-thin relative tracking-widest text-3xl my-2 md:text-5xl lg:text-7xl laptoplarge:text-[4.6rem]">naknowledge<span class="w-24 absolute bottom-4 lg:bottom-7 hidden mx-5 bg-white h-[0.3px] md:w-16 lg:w-28 laptoplarge:w-32 laptopmax:w-48"></span>
        </h1>
    </div>

   
        <div class="flex items-center justify-center gap-10 my-10 mx-9 md:my-10 lg:my-20">
            <div class=" flex flex-col flex-wrap lg:ml-15 md:max-w-md lg:max-w-3xl transition-all duration-700 ">
                <h2 class="font-poppins font-extralight uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-3xl">the project</h2>
                <div class="flex gap-3 my-1">
                    <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                    <p class="font-poppins font-extralight  text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-2">Description
                    </p>
                </div>
                <p class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-2 md:leading-5 lg:text-base">Naknowledge is a study project based on <span class="text-bluelightpo font-light">Wordpress' platform</span>. The primary goal of this website is to create a community of sharing around small knowledge accessible everywhere.<br> <br>This website is dedicated to the free and fun of knowledge. It proposes various <span class="text-bluelightpo font-light">naknow-lessons</span> on a set of various subjects present under <span class="text-bluelightpo font-light">four themes </span>: ecology, web development, video games and graphic design. These lessons can be consulted at any time and can be created by the user and posted on the website.</p>
                <img class="transition-all duration-500 mx-2 my-5  hover:scale-105 opacity-80 hover:opacity-100" src="../assets/naknowledgelp.jpg" alt="image naknowledge landing page">
           

                
                <div class="flex flex-wrap gap-10   mt-5  md:mb-14 mb-10 lg:mb-10  justify-center">
                    <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-md transition-all hover:opacity-50 duration-500"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-md grey transition-all hover:opacity-50 duration-500"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 purplenaknow rounded-md transition-all hover:opacity-50 duration-500"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 purplemidnaknow rounded-md transition-all hover:opacity-50 duration-500"></div>
                    <div class="w-16 h-16 lg:w-20 lg:h-20 purplelightnaknow rounded-md transition-all hover:opacity-50 duration-500"></div>
                </div>

                <a href="http://naknowledge.fr" target="_blank">
                <div class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
                    <img class="w-14" src="../assets/arrow.svg" alt="icone fleche">
                    <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">link to the website</p>
                </div>
                </a>



           


<!--TOOLS USED-->

                <div class="flex gap-3 mt-14 mb-4">
                    <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                    <p class="font-poppins font-extralight text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-2">Tools Used</p>
                </div>
                
                <p class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5  md:leading-5 lg:text-base">Through this project, me and my team used several tools and languages that allowed us to create this website.</p>
                <ul
        class="flex my-3 text-zinc-200 md:text-xs  lg:text-base lg:my-5 font-extralight text-xxs font-poppins space-x-4 md:space-x-16 ">
    
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
            <p>PHP</p>
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
            <p>Illustrator</p>
          </li>
        </div>
      </ul>
            </div>
     </div>
     <FooterR/>
</template>

<script setup>

import Loader from '@/components/Loader.vue'
import FooterR from '@/components/FooterR.vue';

</script>