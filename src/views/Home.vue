<template>
  <div class="home">
    <Navbar></Navbar> 
    <div class="informasi">                    
    <h3 class="text-center">Sewa tenda pernikahan dengan berbagai macam warna tenda pernikahan dan variasi dekorasi pernikahan terbaru.</h3>
    <h5 class="text-center">Berbagai perlengkapan pesta pernikahan kami sediakan untuk Anda, mulai dari sewa tenda pernikahan, sewa ac standing, sewa kursi meja VIP, sewa panggung, sewa genset, dll.</h5>
</div>
    <div class="d-flex justify-content-center">
      <div class="row ">
        <!-- <div class="col-md-6 bg-primary"> -->
          <!-- <div class="d-block p-2"> -->
            <carousel></carousel> 
          <!-- </div> -->
        <!-- </div> -->
        <div class="col-md-5 ">
          <!-- <div class="d-flex justify-content-around">    -->
            <Address></Address>
          <!-- </div> -->
        </div>
      </div>
    </div>
    
    
    
    <div class="clearfix">

    </div>
    <div class="d-block p-2">
       <sample></sample>  
    </div>
     
     
    
       
     
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import Sample from '@/components/Sample.vue'
import Address from '@/components/Address.vue'

export default {
  
  name: 'home',
  components: {   
    Navbar,
    Carousel,
    Sample,
    Address
   
 
  }
}
</script>