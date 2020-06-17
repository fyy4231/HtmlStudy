<template>
  <div id="app">
    <router-view></router-view>
    
    <Tabber></Tabber>
  </div>
</template>

<script>

import Tabber from './components/Tabber'
export default {
  name: 'app',
  components:{Tabber},
  created:function(){
    this.$router.push('/')
  }
}
</script>

<style>
body{padding-bottom: 65px;background: #eee;padding-top: 48px;}
*{margin:0;padding:0;}

.ac{color:green;}
</style>
