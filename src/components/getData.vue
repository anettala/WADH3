<template>
    <div class="post-list" v-for="post in posts"   :key="post.index">  
    <div class="post">
    <h3>  Title:  {{post.title}} </h3>
    <p>  <b> Body: </b> {{post.body}} </p>
    </div>
    </div> 
</template>


<script>
export default {
    name: "getData",
    props: ["posts"]
}
</script>

<style scoped>
.post {
    position:static;
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
    background-color: #7a96b3;
    box-shadow: 0px 0px 14px 0px rgba(10, 10, 10, 0.75);
    border-radius: 10px;
    display: block;
    width: 70%;
    align-items: center;
    justify-content: center;
}
.author {
    position: inherit;
    width: 300px;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.postbox {
    padding-top: 110px;
    padding-bottom: 110px;
}
</style>