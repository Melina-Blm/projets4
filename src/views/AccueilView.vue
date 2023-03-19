<template>
  <main>
    <!--HEADER-->
<div class="pb-10 md:mt-[-40px] lg:mt-[-60px]">
    <div class="relative h-96 md:h-screen flex justify-center flex-col items-center laptopmax:max-w-8xl">
      <img class="px-5 md:px-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 laptopmax:w-4/6 laptopmd:px-14"
        src="../assets/twocircles-blue-orange.svg" alt="illustration circles">

          
              <div class="z-10 mb-3 md:mb-5 laptopmax:mb-7">
                <h1 class="text_md uppercase text-center text-zinc-300 font-poppins text-2xl font-thin tracking-widexl md:text-6xl lg:text-7xl laptopmax:text-8xl animate-pulse ">Melina B.</h1>
               </div>
                <div class="flex  flex-row flex-wrap gap-4 md:gap-10 z-10 lg:gap-14">
                  <a href="https://www.linkedin.com/in/melina-bouchelleghem/" target="_blank">
                    <img class="icones w-5  md:w-10 lg:w-12 transition-all hover:scale-110 duration-300" src="../assets/linkedin.svg"
                      alt="icone linkedin">
                  </a>

                  <a href="https://instagram.com/meli.codes?igshid=YmMyMTA2M2Y=" target="_blank">
                    <img class="icones w-5 md:w-10 lg:w-12 transition-all hover:scale-110 duration-300" src="../assets/instagram.svg"
                      alt="icone instagram">
                  </a>

                  <a href="https://twitter.com/mihokoo_" target="_blank">
                    <img class="icones w-5  md:w-10 lg:w-12 transition-all hover:scale-125 duration-300" src="../assets/twitter.svg"
                      alt="icone twitter">
                  </a>


                  <a href="https://github.com/Melina-Blm" target="_blank">
                    <img class="icones w-5   md:w-10 lg:w-12 transition-all hover:scale-125 duration-300 ease-in-out" src="../assets/github.svg"
                      alt="icone github">
                  </a>

               
          </div>    


    </div>
</div>
    <!--SECTIONS A PROPOS - ABOUT -->

    <div id="about" class="bg-blackpo border-t-[0.015rem] border-zinc-700">
      <div class="flex items-center  justify-center gap-10 my-16 mx-12  md:mx-20 md:my-20 lg:my-28">
        <div
          class=" flex flex-col flex-wrap lg:ml-15 md:max-w-lg lg:max-w-4xl laptopmx:max-w-6xl transition-all duration-700 hover:scale-105 ease-in-out">
          <h2
            class="font-poppins font-extralight uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-2xl">
            About me</h2>

          <div class="flex gap-3 my-1"><span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
            <p class="font-poppins font-thin  text-white text-sm md:text-base lg:text-xl lg:mb-5">Web Development & Web
              Design</p>
          </div>
          <p
            class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-5 md:leading-5 lg:text-base">
            Hi ! My name is Melina and I enjoy creating web visuals and websites. I have always been fascinated by the
            endless possibilities of the web and the way it can be used to connect people from all over the world. I am
            constantly looking for new challenges and opportunities to improve my skills in web development and web
            design.</p>
          <p
            class="  text-zinc-200 font-poppins md:text-xs text-xs font-extralight tracking-wide leading-5 md:leading-5 lg:text-base">
            As a <span class="text-bluelightpo">web developer</span>, I have acquired knowledge in languages such as HTML,
            CSS, JavaScript, as well as experience working with popular frameworks like Vue.js or Tailwind. I'm committed
            to creating fast and user-friendly websites and web applications.</p>
          <p
            class="text-zinc-200 font-poppins md:text-xs text-xs font-extralight tracking-wide leading-5 md:leading-5 lg:text-base my-5">
            As a <span class="text-bluelightpo">designer</span>, I enjoy creating intuitive, modern and aesthetically
            pleasing user interfaces. I use tools like InDesign, Photoshop and Figma to create wireframes, prototypes, and
            visual designs that improve the user experience and meet the needs of the client.<br><br>All along my journey
            I’ve worked with various technologies such as :</p>
          <ListR />



          <div
            class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap ease-in-out bg-transpo hover:bg-hoverpo">
            <img class="w-14" src="../assets/arrow.svg" alt="icone d'une fleche">
            <a href="src/assets/cv-melina-bouchelleghem-francais.pdf" download
              class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">download my
              resume</a>
          </div>

        </div>
      </div>

      <!-- SECTION PROJETS-->

      <div  id="projets" class="">
        <div class="text-right mx-10 my-4 ">
          <h2
            class="font-poppins font-extralight uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-2xl">
            Projects</h2>
        <div class="flex gap-3 justify-end ">
          <p class="font-poppins font-thin  text-white text-sm md:text-base lg:text-xl">Web Development & Web Design</p>
          <span class="w-[2px] h-5 md:h-7 bg-bluepo -rotate-12"></span>
        </div>
      </div>
      <div class="mx-10" id="projets">
        <div class="h-[0.5px] my-2 bg-white"></div>
        <div class=" h-2 md:h-4 bg-bluepo "></div>
        <CardsProject />
      </div>
    </div>
  </div>
  <FooterR />
</main></template>

<script setup>

import Loader from '@/components/Loader.vue';
import MenuR from '@/components/MenuR.vue';
import FooterR from '@/components/FooterR.vue';
import ListR from '@/components/ListR.vue'
import CardsProject from '@/components/CardsProject.vue';

</script>


