<template>
<!-- <div class="container-fluid"> -->
    <!-- <div class="mt-md-2">  -->
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="http://placehold.it/400x200" alt="First slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="http://placehold.it/400x200" alt="Second slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="http://placehold.it/400x200" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    <!-- </div> -->
<!-- <div class="d-flex justify-content-around">   
<div class="card">
    <div class="card-header">
        Jam Operasional dan Alamat
    </div>
    <div class="card-body">
        <h5 class="card-title">Jam Operasional</h5>
        <p class="card-text">Senin-Minggu: 08:00 - 20:00 WIB</p>
        <h5 class="card-title">Office and Workshop</h5>
        <p class="card-text">Era Mas 2000 Blok E3 No.2 Pulogebang – Jakarta Timur</p>
        <a href=" https://goo.gl/maps/8KAdvimzfts" class="btn btn-primary">Get Direction</a>
    </div> 
</div>

</div> -->
<!-- </div> -->
</template>

<script>

//import Adrress from '@/components/Addres.vue'

export default {
    name:'Carousel',

    components: {   
    
    //Adrress
    
    }
}
</script>

<style>
.carousel {
    width: 50%; 
    float: left;  
    margin: auto; 
    position: relative; 
    display: list-item;
}

/* .tales {
  width: 100%;
} */
.carousel-inner{
  width:100%;
  max-height: 900px !important;
}

</style>
