<template>
  <div id="app">
    <Header/>
    <Signup/>
  </div>
</template>

<script>
import Signup from './components/Signup.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Signup,
  },
  data(){
    return {
      booking: [],
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  /* margin-top: 60px; */
}
</style>
