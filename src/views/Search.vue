<template>
  <main class="container">
  <h1>GitHub User Search</h1> 
  <form @submit.prevent="handleSubmit">
  <input 
        type="text"
        placeholder="Type username..." 
        v-model="username"
        @keyup.enter="handleSubmit" 
        required
        >
  <button 
        type="submit"
        >
        Search
  </button>
  </form>
  <br>
  <h4 v-if="error" 
      :class="{ 'error-front': error }"
      >Type username, please!</h4>
  <h4 class="loading" 
      v-if="loading">
      Searching for {{ username }}...
  </h4>
  <div class="circle small"></div>
	<div class="circle medium"></div>
	<div class="circle big"></div>
  <div class="circle big2"></div>
  </main>
</template>

<script>
export default {
  data () {
  return {
    username:'',
    loading: false,
    error: false
    }
  },
  //SetTimeout for showing the loading text longer
  methods:  {
    handleSubmit: function() {
      this.error = true;
      if( this.username ){
      this.loading = true
      this.error = false;
      setTimeout(() => {
              this.$router.push({name: 'Result', params: { username:this.username }}).catch(()=>{});
          }, 1000)
    }
  }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  margin: 0 auto;
}

input {
  display: block;
  font-size: medium;
  color: white;
  min-width: 300px;
  padding-bottom:5px;
  margin: 45px auto;
  text-align: center;
  border: 0;
  border-bottom: 1px solid white;
  -webkit-appearance: none !important; 
  -moz-appearance: none;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif !important;
}

::placeholder {
  color: white;
  opacity: 1;
}

@keyframes gradient { 
  0%{background-position:0 0}
  100%{background-position:100% 0}
}

textarea:focus, input:focus{
  border-bottom: 1px solid #9c89c6;
  outline: none;
}

button {
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  font-family: 'Montserrat', sans-serif !important;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid white;
  color: white;
}

button:hover {
  background-color: #9c89c6;
  color: white;
}

.loading {
  display: block;
  text-align: center;
  font-size: 18px;
  color:#7f438c;
}

.error-front {
  color: red;
  text-align: center;
  display: block;
}
</style>
