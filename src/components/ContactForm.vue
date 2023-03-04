<template>
   <form action="https://formsubmit.co/melina.bouchelleghem@gmail.com" method="POST">
       <div class="flex flex-col flex-wrap bg-blackpo border-bluepo border-[1px] mx-5 p-7 px-10 ">
                
       
        <label for="name" class="font-poppins text-white font-medium text-xs my-3 lg:text-base tracking-widest relative">Name<span class="absolute text-bluepo text-xl bottom-[1px] lg:bottom-1">*</span></label>
        <input type="text" required name="name" id="name" class="bg-transparent mb-5 pb-2 font-poppins text-xs border-b-[1px] border-zinc-600 lg:text-base text-zinc-500 placeholder-zinc-500 focus:outline-none font-light" placeholder="Name">


         <label for="email" class="font-poppins lg:text-base text-white font-medium text-xs my-3  tracking-widest relative">Email <span class="absolute text-bluepo text-xl bottom-[1px] lg:bottom-1">*</span></label>
         <input type="text" required name="email" id="email" class="text-xs text-zinc-500 font-poppins  border-zinc-600  lg:text-base border-b-[1px] bg-transparent mb-5 pb-2 placeholder-zinc-500 focus:outline-none font-light" placeholder="youremail@gmail.com">


        <label for="message" class="font-poppins lg:text-base text-white font-medium text-xs my-3  tracking-widest relative">Message<span class="absolute text-bluepo text-xl bottom-[1px] lg:bottom-1">*</span></label>
        <textarea name="message "  required id="message" cols="5" rows="2"  class=" lg:text-base bg-transparent text-xs border-b-[1px] text-zinc-500 border-zinc-600 focus:outline-none placeholder-zinc-500 mb-5 pb-1 font-poppins font-light" placeholder="Write here..."></textarea>
         
           <input type="hidden" name="_captcha" value="false">
           <input type="hidden" name="_autoresponse" value="Test">
           <input type="hidden" name="_next" value="http://localhost:3000/">
                 
        <div class="flex gap-2 my-5 border-[1px] p-3 w-max rounded-3xl flex-wrap m-auto transition-all duration-700 hover:scale-105 ease-in-out bg-transpo hover:bg-hoverpo">
            <img class="w-14" src="../assets/arrow.svg" alt="">
              <button type="submit" class="font-poppins text-white font-extralight text-xs  lg:text-base hover:cursor-pointer hover:text-zinc-200">send your message.</button>
         </div>
      
      </div> 
         </form> 
</template>