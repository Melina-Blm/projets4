<template >

<div class="bg-darkpo h-screen overflow-x-hidden">
  
    <div class="grid grid-cols-1 lg:grid-cols-2 md:m-7 lg:mx-14 laptoplarge:mx-16 lg:pt-10">
      <div class=" flex flex-col flex-wrap  md:mx-11 mx-12 my-5 mt-10 ">
        <Loader/>
          <h1 class="text-white font-poppins font-thin tracking-widest text-4xl my-5 md:text-5xl lg:text-7xl laptoplarge:text-[4.6rem] ">get in touch with me.</h1>
            <p class="text-zinc-300 font-poppins text-xs font-extralight tracking-wide leading-5 lg:text-base laptoplarge:text-base laptoplarge:my-5 "> Hi ! My name is Melina and I enjoy creating web visuals and websites. I am
            constantly looking for new challenges and opportunities to improve my skills in web development and web
            design.</p>

            
            <div class="my-5 flex gap-4 lg:gap-6 laptoplarge:gap-8 items-center hover:cursor-pointer lg:my-6"><span class="w-11 bg-white h-[0.3px] md:w-16 lg:w-28 laptoplarge:w-32 laptopmax:w-48"></span>

                <a href="https://www.linkedin.com/in/melina-bouchelleghem/" target="_blank"><img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/linkedin.svg" alt="icone linkedin"></a>

                <a href="https://instagram.com/meli.codes?igshid=YmMyMTA2M2Y=" target="_blank"><img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/instagram.svg" alt="icone instagram"></a>

                <a href="https://twitter.com/mihokoo_">
                <img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/twitter.svg" alt="icone twitter">
                </a>
                
                <a href="https://github.com/Melina-Blm" target="_blank"><img  class="w-7 lg:w-9 transition-all hover:scale-110 duration-300" src="../assets/github.svg" alt="icone github"></a>
            </div>
      </div>
      <ContactForm/>
    </div>
    
    <FooterR class="lg:mt-20"/>
</div>
</template>

<script setup>

import Loader from '@/components/Loader.vue';
import MenuR from '@/components/MenuR.vue';
import FooterR from '@/components/FooterR.vue';
import ContactForm from '../components/ContactForm.vue';

</script>