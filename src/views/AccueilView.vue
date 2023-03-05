<template>
  <main>
    <!--HEADER-->
    <div class="grid grid-cols-1 md:grid-cols-2 m-12 md:m-7 lg:m-14 laptoplarge:mx-16   ">
      <div class=" flex flex-col flex-wrap md:mx-11">
        <Loader/>
        <h1 class="text-white font-gloock tracking-widest text-4xl my-5 md:text-5xl lg:text-7xl laptoplarge:text-[5rem]">this is my portfolio.</h1>
        <p class="text-zinc-200 font-poppins text-xs font-extralight tracking-wide leading-5 lg:text-base laptoplarge:text-base laptoplarge:my-5 ">Hi, my name is Melina. I am a student at MMI with a passion for creating websites and online applications. I am constantly looking for new challenges and opportunities to improve my skills in web development and web design !</p>

          <div class="my-5 flex gap-4 lg:gap-6 laptoplarge:gap-8 items-center hover:cursor-pointer lg:my-6"><span class="w-11 bg-white h-[0.3px] md:w-16 lg:w-28 laptoplarge:w-32 laptopmax:w-48"></span>

            <a href="https://www.linkedin.com/in/melina-bouchelleghem/" target="_blank">
              <img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/linkedin.svg" alt="icone linkedin"></a>
            <a href="https://instagram.com/meli.codes?igshid=YmMyMTA2M2Y=" target="_blank">
              <img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/instagram.svg" alt="icone instagram"></a>
              
              <a href="https://twitter.com/mihokoo_">
              <img  class="w-7 lg:w-9 transition-all hover:scale-125 duration-300" src="../assets/twitter.svg" alt="icone twitter">
              </a>

            <a href="https://github.com/Melina-Blm" target="_blank">
               <img  class="w-7 lg:w-9 transition-all hover:scale-125 duration-300 ease-in-out" src="../assets/github.svg" alt="icone github"></a>
          </div>
        </div>
          <div class="m-auto">
            <img class="md:w-[250px] lg:w-[310px] hidden md:block laptoplarge:w-[350px] laptopmax:w-[370px]" src="../assets/illustrationcircle.svg" alt="illustration">
          </div>
    </div>

    <!--SECTIONS A PROPOS - ABOUT -->

          <div class="bg-blackpo border-t-[0.015rem] border-zinc-600">
            <div class="flex items-center  justify-center gap-10 my-16 mx-9 md:my-10 lg:my-28">
              <div class=" flex flex-col flex-wrap lg:ml-15 md:max-w-md lg:max-w-2xl transition-all duration-700 hover:scale-105 ease-in-out">
                <h2 class="font-poppins font-light uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-2xl">About me</h2>
        
                  <div class="flex gap-3 my-1"><span class="w-[2px] h-5 md:h-7 bg-bluepo rotate-12"></span>
                  <p class="font-poppins font-thin  text-white text-sm md:text-base lg:text-xl lg:mb-5">내 배경 정보</p>
                  </div>
                  <p class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-5 md:leading-5 lg:text-base">Hello ! My name is Melina and I enjoy building websites from development to design it. I am constantly looking for new challenges and opportunities to improve my skills in web development and web design.</p>
                  <p class="  text-zinc-200 font-poppins md:text-xs text-xs font-extralight tracking-wide leading-5 md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. <br><br>All along my journey I’ve worked with various technologies such as :</p>
                  <ListR/>
                  <p class=" text-zinc-200 font-poppins text-xs md:text-xs font-extralight tracking-wide leading-5 my-5 md:leading-5 lg:text-base">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
      
                  <RouterLink to ="/contact">
                    <div class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
                    <img class="w-14" src="../assets/arrow.svg" alt="icone d'une fleche">
                    <p class="font-poppins text-white font-extralight text-xs  mx-3 lg:text-base hover:cursor-pointer">get in contact with me.</p>
                    </div>
                  </RouterLink>
                </div>
              </div>

              <!-- SECTION PROJETS-->


                <div class="text-right mx-10 my-4 ">
                  <h2 class="font-poppins font-light uppercase text-white text-lg tracking-widexl my-2 md:text-xl  lg:text-2xl">Projects</h2>
                    <div class="flex gap-3 justify-end ">
                      <p class="font-poppins font-thin  text-white text-sm md:text-base lg:text-xl">내 배경 정보</p><span class="w-[2px] h-5 md:h-7 bg-bluepo -rotate-12"></span>
                  </div>
                </div>
                  <div class="mx-10">
                  <div class="h-[0.5px] my-2 bg-white" ></div>
                  <div class=" h-2 md:h-4 bg-bluepo "></div>
                  <CardsProject/>
            </div>
          </div>
  </main>
</template>

<script setup>

import Loader from '@/components/Loader.vue';
import MenuR from '@/components/MenuR.vue';
import FooterR from '@/components/FooterR.vue';
import ListR from '@/components/ListR.vue'
import CardsProject from '../components/CardsProject.vue';



</script>

