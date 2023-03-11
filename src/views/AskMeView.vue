<template>
  <div class="flex flex-col flex-wrap md:mx-16 mx-10 my-5 mt-10 lg:mx-20 ">
    <Loader />
    <h1
      class="text-white font-poppins font-thin relative tracking-widest text-3xl my-5 md:text-5xl lg:text-7xl laptoplarge:text-[4.6rem]">
      askme</h1>
  </div>


  <div class="flex items-center justify-center gap-10 my-10 mx-9 md:my-10 lg:my-20">
    <div class=" flex flex-col flex-wrap lg:ml-15 md:max-w-md lg:max-w-3xl transition-all duration-700 ">
      <h2 class="font-poppins font-extralight uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-3xl">
        the project</h2>
      <div class="flex gap-3 my-1">
        <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
        <p class="font-poppins font-extralight  text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-5">Description</p>
      </div>
      <p
        class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-2 md:leading-5 lg:text-base">
        Askme is a project created by three students with the aim of helping students in their studies. Through Askme, we
        offer the possibility for users to interact with each other to help each other.<br><br> During this project, we've
        also created the Askme promotional website where we defined our values, and future features within Askme.</p>
      <img class="transition-all mb-[-15px] duration-500 hover:scale-105 opacity-80 hover:opacity-100"
        src="../assets/askmelp.png" alt="image askme landing page">

      <div class="flex flex-wrap gap-10 md:mb-14 mb-10 lg:mb-14 justify-center">
        <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-md transition-all hover:opacity-50 duration-500"></div>
        <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-md grey transition-all hover:opacity-50 duration-500"></div>
        <div class="w-16 h-16 lg:w-20 lg:h-20 blue rounded-md transition-all hover:opacity-50 duration-500"></div>
        <div class="w-16 h-16 lg:w-20 lg:h-20 clearblue rounded-md transition-all hover:opacity-50 duration-500"></div>
        <div class="w-16 h-16 lg:w-20 lg:h-20 bg-blackpo  rounded-md transition-all hover:opacity-50 duration-500"></div>
      </div>


      <!--BUTTON-->

      <a href="https://askme.melinaweb.fr/" target="_blank">
        <div
          class="flex gap-2 mb-5 border-[1px] p-3 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
          <img class="w-14" src="../assets/arrow.svg" alt="icone fleche">
          <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">link to the
            landing page</p>
        </div>
      </a>




      <!--TOOLS USED-->

      <div class="flex gap-3 mt-14 lg:mt-9 mb-4">
        <span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
        <p class="font-poppins font-extralight text-zinc-400 text-sm md:text-base lg:text-xl lg:mb-2">Tools Used</p>
      </div>
      <p
        class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5  md:leading-5 lg:text-base ">
        Throughout this project, me and my team used several tools and languages that allowed us to create the promotional
        aswell as the actual Askme website.</p>
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
            <p>Illustrator</p>
          </li>
        </div>
      </ul>
  
  </div>
  
</div>
<FooterR /></template>

<script setup>

import Loader from '@/components/Loader.vue'
import FooterR from '@/components/FooterR.vue';

</script>