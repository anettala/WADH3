<template>
    <div class="header">
        <h1> {{msg}} </h1>
        <nav>
            <router-link to="/view2">Home</router-link> |
            <router-link to="/view1">Login</router-link>   
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            msg: String,
        }
    }
</script>

<style>
.header {
    background-color: #a1bdc4;
    padding-bottom: .5em;
    border: 1px solid #646174;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    border-radius: 7px;
    position: top; width: 100%;
    opacity: 80%;
}

.nav {
    margin-top: 5px;
    display: inline;
}

.nav a {
    padding: 5px 5px;
    text-align: left;
    display: block;
    color: #34495e;
    font-size: 20px;
}

.nav a:hover {
    background-color: #73a1cf;
    color: #202b36;
}

.header > ul > li {
    align-items: center;
    display: inline-block;
}
</style>
