<template>
    <div class="bg-darkpo h-full overflow-x-hidden">
        <MenuR/>
          <Suspense>
           <router-view class=""/>
          </Suspense>
          
   </div>
</template>

<script setup>
import Loader from '@/components/Loader.vue';
import MenuR from '@/components/MenuR.vue';
import FooterR from '@/components/FooterR.vue';
</script>