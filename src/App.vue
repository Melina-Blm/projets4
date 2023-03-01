<template>
    <div class="bg-darkpo">
<MenuR/>
      <Suspense>
        <router-view class=""/>
      </Suspense>
<FooterR/>
  </div>

</template>

<script setup>
import Loader from '@/components/Loader.vue';
import MenuR from '@/components/MenuR.vue';
import FooterR from '@/components/FooterR.vue';

 
</script>