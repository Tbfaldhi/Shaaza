<template>
<div>
<div>
    <div class="d-flex p-2 ">
        <div class="d-inline p-2 bg-primary text-white col-lg-8 text-left"> <img src="http://dewisalju.com/wp-content/uploads/2015/06/logo-baru-dewisalju3.png" alt=" logo"> </div>
        <div class="d-block p-2 bg-primary text-white col-sm-6 text-right"> </div>
    </div>
</div>
<div>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#" @click="home">Home</a>
            </li>
            <li class="nav-item active">
               <a class="nav-link" href="#" @click="aboutus">about Us</a>
            </li>
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Product
                </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item"  @click="tenda">Tenda</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="sewaac">Jasa Sewa AC</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="coolingfan">Cooling Fan</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="genset">Genset</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="panggung">Panggung</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="mejakursi">Meja dan Kursi</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" @click="flooring">Flooring</a>
        </div>
      </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">pricelist</a>
            </li>
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portofolio
                </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Acara Pernikahan</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Acara Bazar dan Pameran</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Acara Peresmian Kantor</a>
        </div>
      </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
         <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact Us
                </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">0818789999</a>         
        </div>
      </li>
        <li class="nav-item active text-dark">
                <a class="nav-link" href="#">0818789999</a>
            </li>
        </ul>
    </div>
</nav>
</div>
</div> 
</template>

<script>
import Carousel from '@/components/Carousel.vue'


export default {
    name:'Navbar',
    components: {   
    Carousel,
  },
   methods:{
    home(){
           this.$router.push({name:"home"  })
       },
    tenda(){
          this.$router.push({ name:"tenda"})
      },
    sewaac(){
          this.$router.push({ name:"sewaac"})
      },
    panggung(){
          this.$router.push({ name:"panggung"})
      },
    mejakursi(){
          this.$router.push({ name:"mejakursi"})
      },
    genset(){
          this.$router.push({ name:"genset"})
      },
    flooring(){
          this.$router.push({ name:"flooring"})
      },
    coolingfan(){
          this.$router.push({ name:"coolingfan"})
      },
    aboutus(){
          this.$router.push({ name:"aboutus"})
      }
  }
}
</script>

<style>
.container-fluid {
   padding: 0px;
}

.informasi{
    padding-left: 80px;
    padding-right: 80px
}
.d-block{
    padding-left: 0px;
    padding-right: 0px
}

.stylish-input-group .input-group-addon{
    background: white !important; 
}
.stylish-input-group .form-control{
	border-right:0; 
	box-shadow:0 0 0; 
	border-color:#ccc;
}
.stylish-input-group button{
    border:0;
    background:transparent;
}

.nav-link  {
  font-weight: bold;
  color: #ffffff;
}

/* .nav-link {
  color: #ffffff;
} */
</style>


