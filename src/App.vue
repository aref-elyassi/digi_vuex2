<template>
  <Header />
  <router-view class="router"></router-view>
  <Footer />
</template>
<script>
import Home from '@/views/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
export default {
  components: {
    Home,
    Header,
    Footer
  }
}
</script>
<style>
.router{
  
}
@font-face {
  font-family: "Yekan";
  src: local("Yekan"),
    url(./assets/font/B_Yekan/Yekan.ttf) format("truetype");
}

#app {
  font-family: Yekan;
  direction: rtl;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
