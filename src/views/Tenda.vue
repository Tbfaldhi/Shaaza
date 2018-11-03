<template>
  <div class="home">
    <Navbar></Navbar> 
    
    <h1>Type Tenda</h1>
   <div class="row">
      <div class="col-md-3" v-for="(item, index) in tenda" :key="index">
        <div class="card">
    <img :src="item.image" :alt="item.name" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title">{{ item.name }}</h4>
      <!-- <div class="card-text">${{ item.price / 100 }}</div> -->
      <div class="row justify-content-end">
        <!-- <button class="btn btn-primary">Add to cart</button> -->
      </div>
    </div>
  </div>
      </div>
    </div>
    
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

  data() {
    return {
      tenda: [
        { invId: 1, name: 'Tenda Dekorasi VIP', image: '//placehold.it/200', price: 999 },
        { invId: 2, name: 'Tenda Semi Dekor', image: '//placehold.it/200', price: 1499 },
        { invId: 3, name: 'Tenda Kerucut', image: '//placehold.it/200', price: 499 },
        { invId: 4, name: 'Tenda Konvensional', image: '//placehold.it/200', price: 299 },
      ],
    };
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
