<template>
          <div class="flex items-center justify-end">
            <div class="text-white font-poppins text-base font-extralight hidden md:flex md:items-center md:text-sm laptoplarge:text-base laptopmax:text-lg lg:flex lg:visible md:visible gap-14 p-5 px-12 lg:items-center">
                  
              <RouterLink to="/">
                <p class="hover:text-zinc-300 relative transition-all duration-700 hover:scale-110 ease-in-out">home<span class="absolute bottom-3 text-bluepo">01</span></p>
              </RouterLink>
                  
              <RouterLink to="/">
                <p class="hover:text-zinc-300 relative transition-all duration-700 hover:scale-110 " id="projects">projects<span class="absolute bottom-3 text-bluepo">02</span></p>
              </RouterLink>

              <RouterLink to="/">
                <p class="hover:text-zinc-300 relative transition-all duration-700 hover:scale-110 ">about<span class="absolute bottom-3 text-bluepo">03</span></p>
              </RouterLink>

              <RouterLink to ="/contact">
                <img class="w-10 cursor-pointer transition-all duration-700 hover:scale-110" src="../assets/contact-po.png" alt="icone contact">
              </RouterLink>
            </div>
            <RouterLink to="/">
            <img class="md:hidden my-5 mx-8 active" src="../assets/homebtn.svg" alt="icone home">
            </RouterLink>
          </div>
</template>

<script>

</script>