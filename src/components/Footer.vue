<template>
    <div class="footer">
        <h2> {{msg}} </h2>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props:{
            msg: String,
        }
    }
</script>

<style>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #a1bdc4;
    padding-bottom: .5em;
    border: 1px solid #646174;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    border-radius: 7px;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    opacity: 80%;
}
</style>