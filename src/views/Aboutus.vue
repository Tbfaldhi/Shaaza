<template>
  <div class="home">
    <Navbar></Navbar> 
    
    <h1>aboutus</h1>
    
    
    <div class="clearfix">

    </div>
    <!-- <div class="d-block p-2">
       <sample></sample>  
    </div> -->
     
     
    
       
     
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import Sample from '@/components/Sample.vue'
// import Address from '@/components/Address.vue'

export default {
  
  name: 'home',
  components: {   
    Navbar,
    Carousel,
    Sample,
    // Address  

  },
 

}
</script>

<style>
.nav-link a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-link a.router-link-exact-active {
  color: #42b983;
}
</style>
