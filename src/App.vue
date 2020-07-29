<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Montserrat:wght@200&display=swap');

body {
    background: #F0F0F0;
    margin: 0;
    color: black;
    font-family: 'Montserrat', sans-serif !important;
}
h3 {
    text-align: center;
    padding: 15px;
    font-size: x-large;
    border-bottom: 0.5px solid #ffabb9;
}
</style>
