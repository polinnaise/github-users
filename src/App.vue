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

:root {
  --color1: #d7cfe8;
  --color2: #9c89c6;
}

body {
  align-items: center;
  background-image: linear-gradient(to bottom right, var(--color1), var(--color2));
  color:white;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif !important;
}

h1 {
    text-align: center;
    font-size: 43px;
}

.circle {
  background-image: linear-gradient(to top right, var(--color1), var(--color2));
  border-radius: 50%;
  position: absolute;
  z-index: -1;
}

.circle.small {
  top: 200px;
  left: 150px;
  width: 100px;
  height: 100px;
}

.circle.medium {
  background-image: linear-gradient(to bottom left, var(--color1), var(--color2));
  bottom: 10px;
  left: 10px;
  width: 200px;
  height: 200px;
}

.circle.big {
  top: -100px;
  right: -50px;
  width: 400px;
  height: 400px;
}

.circle.big2 {
  bottom: -500px;
  right: -150px;
  width: 800px;
  height: 800px;
}

@media screen and (max-width: 2560px) and (min-width: 1900px) {
  .circle.small {
    width: 10%;
    height: 25%;
  }

  .circle.medium {
    width: 15%;
    height: 40%;
  }

   .circle.big {
    width: 25%;
    height: 65%;
  }

  h1 {
    font-size: 70px;
  }

  input {
    width: 500px;
  }
}
</style>
