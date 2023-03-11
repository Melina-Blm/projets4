<template>
    <div class="flex items-center justify-end z-20 relative">
            <div class="text-white font-poppins text-base font-extralight hidden md:flex md:items-center md:text-sm laptoplarge:text-base laptopmax:text-lg lg:flex lg:visible md:visible gap-14 p-4 mr-12 lg:items-center">
                  
              <RouterLink to="/">
                <p class="hover:text-zinc-300 relative transition-all duration-700 hover:scale-110 ease-in-out">home<span class="absolute bottom-3 text-bluepo hover:text-orange-500">01</span></p>
              </RouterLink>
                  
              <a href="/#projets">
                <p class="hover:text-zinc-300 relative transition-all duration-700 hover:scale-110">projects<span class="absolute bottom-3 text-bluepo hover:text-orange-500">02</span></p>
              </a>


              <a href="/#about">
                 <p class="hover:text-zinc-300 relative transition-all duration-700 hover:scale-110 ">about<span class="absolute bottom-3 text-bluepo hover:text-orange-500">03</span></p>
              </a>
           

              <RouterLink to ="/contact">
                <img class="w-10 cursor-pointer transition-all duration-700 hover:scale-110" src="../assets/contact-po.png" alt="icone contact">
              </RouterLink>

            </div>
            <RouterLink to="/">
            <img class="md:hidden my-5 mx-8 active" src="../assets/home-btn.svg" alt="icone home">
            </RouterLink>
          </div>
</template>

<script>

</script>