<template>
  <main>
  <h3>GitHub User Search</h3> 
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
    min-width: 40%;
    padding: 15px 25px;
    margin: 45px auto;
    text-align: center;
    border: 0;
    border-bottom: 1px solid;
    -webkit-appearance: none !important; 
    -moz-appearance: none;
    background: linear-gradient(to left, #F0F0F0, #F0F0F0, #d8d8d8, #F0F0F0, #F0F0F0 );
    background-size: 500% auto;
    animation: gradient 5s linear infinite;
    font-family: 'Montserrat', sans-serif !important;
}

@keyframes gradient { 
    0%{background-position:0 0}
    100%{background-position:100% 0}
}

textarea:focus, input:focus{
    outline: none;
}

button {
   margin: 0 auto;
   padding: 10px;
   width: 20%;
   font-family: 'Montserrat', sans-serif !important;
   cursor: pointer;
}

.loading {
    display: block;
    text-align: center;
    font-size: medium;
    color:#ff91a4;
}

.error-front {
    color: red;
    text-align: center;
    display: block;
}
</style>
