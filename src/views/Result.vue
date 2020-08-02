<template>
  <div>
  <h1>GitHub User Result</h1> 
  <main class="result">
    <img v-if="result.avatar_url" 
         :src="result.avatar_url"
         >
    <h4 v-if="result.login">
        Username: {{ result.login }}
    </h4>
    <h4 v-if="result.name">
        Name: {{ result.name }}
    </h4>
    <p v-if="result.public_repos">
        Public repository: {{ result.public_repos }}
    </p>
    <h4
        v-if="result.html_url"
        >
        {{ result.html_url }}
    </h4>
    <h4 v-if="error">{{ username }} does not exist!</h4>
  <router-link 
            :to="{ name: 'Search' }"
            class="router">
            Let's go back to search
	</router-link>
  </main>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  props: ['username'],
  data () {
  return {
    result: '',
    error: false
  }
  },
  created () {
    this.fetchData()
  },
  watch: {
    username: function () {
      this.error = '';
    },
    '$route': 'fetchData'
  },
  methods:  {
    fetchData: function() {
      if( this.username ){
      axios.get('https://api.github.com/users/' + this.username)
      .then(response => {
          this.result = response.data;
          this.error = '';
      }).catch(error => {
          this.result = '';
          this.error = error;
      });
      }
    }
  }
}
</script>

<style scoped>
.result {
    text-align: center;
    display: block;
    width: 400px;
    height: auto;
    max-width: 74%;
    padding: 25px;
    margin: 15px auto;
    border: 1px solid #9d55ad;
    box-shadow: 10px 15px #7f438c;
}

.result img {
    display: block;
    width: 300px;
    height: auto;
    margin: 0 auto 15px;
}

.router {
    display: block;
    text-align: center;
    font-weight: bolder;
    text-decoration: none;
    color:#7f438c;
}
</style>