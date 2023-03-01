<template>
         <div class=" flex items-center justify-end ">
                  <div class="text-white font-poppins text-base font-extralight hidden md:flex md:items-center md:text-sm laptoplarge:text-base laptopmax:text-lg lg:flex lg:visible md:visible gap-14 p-5 px-12 lg:items-center">
                      <RouterLink to="/">
                      <p class="hover:text-zinc-300 relative ">home<span class="absolute bottom-3 text-bluepo">01</span></p>
                      </RouterLink>
                      <RouterLink to="/">
                      <p class="hover:text-zinc-300 relative">projects<span class="absolute bottom-3 text-bluepo">02</span></p>
                      </RouterLink>
                      <RouterLink to="/">
                      <p class="hover:text-zinc-300 relative">about<span class="absolute bottom-3 text-bluepo">03</span></p>
                      </RouterLink>
                      <RouterLink to ="/contact">
                      <img class="w-10 cursor-pointer " src="../assets/contact-po.png" alt="">
                      </RouterLink>
                  </div>
              </div>
</template>