<template>
  <div class="fetch">
    <get-data :posts="posts"/>
  </div>

</template>


<script>
import getData from "@/components/getData.vue";   

export default {
  name: "FetchView",
  components: {
    getData
  },
  data: function() {
    return {
    
    posts:[
      
    ]
    }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
       // fetch('http://localhost:3000/Posts') //using the local Json server
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

<style>
* {
    font-family: sans-serif;
    box-sizing: border-box;
    font-size: medium;
}
body {
    line-height: 1.6;
    margin: 0;
    position: relative;
    background-color: #b0c4d8;
}
a {
    color: rgb(35, 58, 45);
    text-decoration: none;
}
</style>